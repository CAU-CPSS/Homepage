/**
 * 서버에서 직접 처리하는 발행 파이프라인.
 *
 *   news.json 수정 → "Chore: Add News" 커밋 → push → next/deploy.sh
 *
 * 서버가 이미 GitHub push 권한을 갖고 있어서, 별도의 토큰 없이 이 경로만으로 완결된다.
 */

import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { resolve } from "node:path";

import { addNewsItem, NEWS_REL_PATH, REPO_DIR } from "./store.js";

const exec = promisify(execFile);

const BRANCH = process.env.BRANCH || "next-migration";
const DEPLOY_SCRIPT = process.env.DEPLOY_SCRIPT || resolve(REPO_DIR, "next/deploy.sh");
/** 테스트용 — 1 이면 커밋·push 까지만 하고 빌드/재시작은 건너뛴다. */
const SKIP_DEPLOY = process.env.SKIP_DEPLOY === "1";

const COMMIT_MESSAGE = "Chore: Add News";
const COMMIT_AUTHOR = ["-c", "user.name=news-bot", "-c", "user.email=news-bot@cpss.cau.ac.kr"];

/**
 * 동시 요청 직렬화.
 * 두 사람이 같은 순간에 /news 를 제출해도 커밋이 겹치지 않게 한 줄로 세운다.
 */
let tail = Promise.resolve();
function enqueue(task) {
  // 앞선 작업의 성패와 무관하게 다음 작업이 돌아야 하므로 양쪽에 task 를 건다.
  const run = tail.then(task, task);
  tail = run.catch(() => {});
  return run;
}

function git(args, timeout = 60_000) {
  return exec("git", ["-C", REPO_DIR, ...args], { timeout, encoding: "utf8" });
}

/** 실패 메시지에 stderr 를 붙여 pm2 로그와 디스코드 양쪽에서 원인이 보이게 한다. */
function describe(err) {
  const detail = [err.stderr, err.stdout].filter(Boolean).join("\n").trim();
  return detail ? `${err.message}\n${detail}`.slice(0, 800) : err.message;
}

async function assertCleanTree() {
  const { stdout: branch } = await git(["rev-parse", "--abbrev-ref", "HEAD"]);
  if (branch.trim() !== BRANCH) {
    throw new Error(
      `서버 체크아웃이 ${branch.trim()} 브랜치에 있습니다. ${BRANCH} 로 옮긴 뒤 다시 시도해주세요.`,
    );
  }

  const { stdout } = await git(["status", "--porcelain", "--", NEWS_REL_PATH]);
  if (stdout.trim()) {
    throw new Error(
      "서버의 news.json 에 커밋되지 않은 수정이 남아 있어 중단했습니다. 담당자가 정리해야 합니다.",
    );
  }
}

/**
 * @param {object} validated validateInput 의 결과값
 * @param {(step: string) => void} [onProgress] 진행 상황 콜백
 */
export function publishNews(validated, onProgress = () => {}) {
  return enqueue(async () => {
    onProgress("저장소 상태 확인 중");
    await assertCleanTree();

    try {
      await git(["pull", "--ff-only", "origin", BRANCH], 120_000);
    } catch (err) {
      throw new Error(`git pull 실패 — 서버 저장소를 확인해주세요.\n${describe(err)}`);
    }

    onProgress("news.json 수정 중");
    const item = addNewsItem(validated);

    let committed = false;
    try {
      onProgress("커밋 및 push 중");
      await git(["add", "--", NEWS_REL_PATH]);
      await git([...COMMIT_AUTHOR, "commit", "-m", COMMIT_MESSAGE]);
      committed = true;
      await git(["push", "origin", BRANCH], 120_000);
    } catch (err) {
      // 커밋 전에 실패했으면 파일을 되돌려서 다음 요청이 막히지 않게 한다.
      if (!committed) {
        await git(["checkout", "--", NEWS_REL_PATH]).catch(() => {});
      }
      throw new Error(`커밋/push 실패\n${describe(err)}`);
    }

    if (SKIP_DEPLOY) {
      onProgress("배포 생략 (SKIP_DEPLOY=1)");
      return { item, deployed: false };
    }

    onProgress("빌드 및 재시작 중 (2~3분)");
    try {
      await exec("bash", [DEPLOY_SCRIPT], {
        timeout: 600_000,
        encoding: "utf8",
        maxBuffer: 10 * 1024 * 1024,
      });
    } catch (err) {
      // 커밋과 push 는 이미 끝난 상태다. 다음 배포 때 자동으로 반영된다.
      throw new Error(
        `커밋은 됐지만 배포가 실패했습니다 (id: ${item.id}). 서버에서 확인이 필요합니다.\n${describe(err)}`,
      );
    }

    return { item, deployed: true };
  });
}
