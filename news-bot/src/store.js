/**
 * news.json 을 실제로 읽고 쓰는 유일한 곳.
 *
 * 읽기와 쓰기를 한 모듈에 모아두면 파일 포맷 규칙이 한 곳에만 존재한다.
 */

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

import { insertSorted, makeUniqueId } from "./news.js";

const here = dirname(fileURLToPath(import.meta.url));

export const REPO_DIR = process.env.REPO_DIR || resolve(here, "../..");
const NEWS_PATH = resolve(REPO_DIR, "next/src/data/news.json");
/** 커밋할 때 git add 에 넘길 레포 기준 상대경로 */
export const NEWS_REL_PATH = "next/src/data/news.json";

function readNews() {
  const list = JSON.parse(readFileSync(NEWS_PATH, "utf8"));
  if (!Array.isArray(list)) {
    throw new Error(`${NEWS_PATH} 가 배열이 아닙니다.`);
  }
  return list;
}

/**
 * 검증된 항목을 news.json 에 추가하고, 실제로 기록된 항목(id 포함)을 돌려준다.
 * @param {{date: string, title: object, body: object}} validated validateInput 의 결과값
 */
export function addNewsItem(validated) {
  const existing = readNews();

  const item = {
    id: makeUniqueId(validated, existing),
    date: validated.date,
    title: validated.title,
    body: validated.body,
  };

  // 기존 파일 포맷 유지: 2 스페이스 인덴트, 끝에 개행 없음
  writeFileSync(NEWS_PATH, JSON.stringify(insertSorted(existing, item), null, 2), "utf8");

  return item;
}
