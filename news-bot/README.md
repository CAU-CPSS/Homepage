# news-bot

디스코드에서 `/news` 로 홈페이지 News 항목을 추가하는 봇.

## 흐름

```
디스코드  /news → 모달 5칸 입력 → 제출
   ↓ 봇이 검증 (날짜 형식, 빈 칸, 길이)
서버      news.json 에 항목 추가 → "Chore: Add News" 커밋 → push
   ↓ next/deploy.sh (빌드 + pm2 재시작)
디스코드  진행 상황을 본인에게만 보이게 갱신 + 채널에 공개 기록
```

반영까지 보통 2~3분. 승인 절차는 없고 제출 즉시 배포된다.
동시 제출은 봇 내부 큐에서 한 건씩 직렬 처리한다.

### 왜 GitHub Actions 를 안 쓰는가

처음에는 `repository_dispatch` 로 Actions 를 깨워 커밋·배포하게 만들었는데,
CAU-CPSS 조직이 fine-grained PAT 에 오너 승인을 요구해서 토큰을 쓸 수 없었다.
서버에 이미 GitHub push 권한이 있어서, 봇이 직접 처리하는 쪽으로 바꿨다.
그 결과 토큰 만료도 조직 정책도 신경 쓸 필요가 없어졌다.

Actions 방식으로 옮기고 싶어지면 `src/publish.js` 를 GitHub API 의
`POST /repos/{owner}/{repo}/dispatches` 호출로 바꾸고, 워크플로에서
`src/store.js` 의 `addNewsItem` 을 부르면 된다. 검증 로직(`src/news.js`)은 그대로 쓸 수 있다.

## 최초 설정

1. `cp .env.example .env` 후 값 채우기
   - `DISCORD_TOKEN` / `DISCORD_APP_ID`
   - `DISCORD_GUILD_IDS` — 서버 ID. 여러 서버면 쉼표로 구분
   - `ALLOWED_ROLE_IDS` — `/news` 를 쓸 역할 ID. **비워두면 서버 전원이 사용 가능**
2. `npm ci`
3. `npm run register` — 슬래시 커맨드 등록 (커맨드 이름/설명 바꿀 때만 다시 실행)
4. `bash deploy.sh` — pm2 에 `news-bot` 으로 등록 및 실행

서버 저장소(`/var/www/Homepage`)가 `next-migration` 브랜치에 있고 push 권한이
설정돼 있어야 한다. 봇은 다음 두 경우에 작업을 거부한다.

- 체크아웃이 다른 브랜치에 있을 때
- `news.json` 에 커밋되지 않은 수정이 남아 있을 때 (남의 작업을 삼키지 않기 위해)

## 서버 추가하기

봇은 `.env` 의 `DISCORD_GUILD_IDS` 에 적힌 서버에서만 동작한다. 추가 절차:

1. **새 서버에 봇 초대** — 기존 OAuth2 초대 URL 을 그대로 쓴다.
   공개 봇이 꺼져 있으므로 **앱 소유자 본인이** 초대해야 하고,
   그 서버에서 `서버 관리` 권한도 있어야 한다.
2. **서버 ID 를 `.env` 에 추가** — 쉼표로 이어 붙인다.
   ```
   DISCORD_GUILD_IDS=1492638277029859488,새서버ID
   ```
3. **커맨드 등록** — `npm run register` (모든 서버에 다시 등록하며, 실패한 서버만 알려준다)
4. **봇 재시작** — `pm2 restart news-bot --update-env`
5. **역할 추가** — 새 서버에서 `/news` 를 쓸 역할 ID 를 `ALLOWED_ROLE_IDS` 에 이어 붙인다.
   역할 ID 는 서버가 달라도 겹치지 않으므로 한 줄에 섞어 적으면 된다.

시작 로그(`pm2 logs news-bot`)에 서버 이름이 찍히므로 제대로 붙었는지 바로 확인할 수 있다.
봇이 없는 서버 ID 를 적어두면 경고가 뜬다.

**주의: 어느 서버에서 올리든 같은 `news.json` 에 들어간다.** 서버별로 다른
홈페이지에 반영되는 구조가 아니다.

## 봇 코드를 고쳤을 때

```bash
bash deploy.sh
```

홈페이지 배포(`next/deploy.sh`)는 봇을 재시작하지 않는다. 서로 독립이다.

## 구조

| 파일 | 역할 |
| --- | --- |
| `src/index.js` | 봇 본체. 커맨드/모달 처리 |
| `src/commands.js` | 커맨드·모달·필드 ID 정의 |
| `src/news.js` | 입력 검증, id 생성, 정렬 삽입 |
| `src/store.js` | news.json 읽기/쓰기 — 파일을 만지는 유일한 곳 |
| `src/publish.js` | 커밋 → push → 배포 파이프라인, 동시 요청 직렬화 |
| `src/register.js` | 슬래시 커맨드 등록 |
| `src/config.js` | .env 로딩 및 필수값 검사 |

`src/news.js` 는 봇과 워크플로 양쪽이 함께 쓴다. News 필드가 바뀌면
[../next/src/content/data.ts](../next/src/content/data.ts) 의 `NewsItem` 과 여기를 같이 고쳐야 한다.

## 자주 겪는 문제

**`/news` 가 목록에 안 뜬다** — `npm run register` 를 돌렸는지, 서버 설정 → 연동에서
해당 역할에 커맨드가 허용돼 있는지 확인. 봇 초대 시 `applications.commands`
스코프가 빠졌으면 다시 초대해야 한다.

**"⚠️ 처리 중 오류"** — `pm2 logs news-bot` 에 원인이 그대로 찍힌다.
서버 워킹트리가 더럽거나 브랜치가 다른 경우가 가장 흔하다.

**"커밋은 됐지만 배포가 실패했습니다"** — news.json 커밋과 push 는 끝난 상태다.
내용이 유실된 게 아니므로 서버에서 `bash next/deploy.sh` 를 직접 돌려 원인을 보면 된다.
