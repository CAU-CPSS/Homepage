/**
 * .env 값을 한 곳에서 읽는다.
 *
 * 실행 파일마다 필요한 변수가 다르므로(커맨드 등록에는 배포 설정이 필요 없다)
 * 검사는 각 진입점이 ensure() 로 직접 선언한다.
 */

/** 쉼표로 구분된 ID 목록을 배열로. 공백과 빈 항목은 버린다. */
function idList(value) {
  return (value || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

export const config = {
  token: process.env.DISCORD_TOKEN,
  appId: process.env.DISCORD_APP_ID,
  /** 봇을 쓸 서버 목록. 예전 단일값 DISCORD_GUILD_ID 도 그대로 받는다. */
  guildIds: idList(process.env.DISCORD_GUILD_IDS || process.env.DISCORD_GUILD_ID),
  /**
   * /news 를 쓸 역할 ID 목록.
   * 역할 ID 는 서버가 달라도 겹치지 않으므로 여러 서버의 역할을 한 줄에 섞어 적어도 된다.
   */
  allowedRoleIds: idList(process.env.ALLOWED_ROLE_IDS),
};

/** 빠진 환경변수가 있으면 즉시 죽는다. (pm2 로그에서 원인이 바로 보이게) */
export function ensure(...names) {
  const missing = names.filter((name) => !process.env[name]);
  if (missing.length > 0) {
    console.error(`[config] 환경변수가 없습니다: ${missing.join(", ")}`);
    console.error("[config] news-bot/.env 를 확인하세요 (.env.example 참고).");
    process.exit(1);
  }

  if (names.includes("DISCORD_GUILD_IDS") && config.guildIds.length === 0) {
    console.error("[config] DISCORD_GUILD_IDS 가 비어 있습니다. 서버 ID 를 최소 하나 적어주세요.");
    process.exit(1);
  }
}
