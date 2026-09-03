/**
 * 슬래시 커맨드를 각 서버에 등록한다.
 *
 *   cd news-bot && npm run register
 *
 * 서버를 추가했거나 커맨드 이름/설명을 바꿨을 때 다시 돌리면 된다.
 * 길드 스코프라 등록 즉시 반영된다(전역 스코프는 최대 1시간 걸림).
 *
 * 등록은 서버별로 독립이라, 한 곳이 실패해도 나머지는 계속 진행한다.
 */

import { REST, Routes } from "discord.js";
import { config, ensure } from "./config.js";
import { NEWS_COMMAND } from "./commands.js";

ensure("DISCORD_TOKEN", "DISCORD_APP_ID", "DISCORD_GUILD_IDS");

const rest = new REST({ version: "10" }).setToken(config.token);

let failed = 0;

for (const guildId of config.guildIds) {
  try {
    await rest.put(Routes.applicationGuildCommands(config.appId, guildId), {
      body: [NEWS_COMMAND],
    });
    console.log(`[register] ✅ ${guildId} — /${NEWS_COMMAND.name} 등록 완료`);
  } catch (err) {
    failed++;
    // 가장 흔한 원인: 봇이 그 서버에 초대되지 않았거나 applications.commands 스코프가 빠졌다.
    const hint =
      err.status === 403 || err.status === 404
        ? " (봇이 이 서버에 없거나 applications.commands 스코프가 빠졌습니다 — 다시 초대해야 합니다)"
        : "";
    console.error(`[register] ❌ ${guildId} — ${err.message}${hint}`);
  }
}

console.log(`[register] ${config.guildIds.length - failed}/${config.guildIds.length} 성공`);
if (failed > 0) process.exit(1);
