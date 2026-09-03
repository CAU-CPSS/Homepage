/**
 * News 봇 본체.
 *
 * /news 를 치면 모달이 뜨고, 제출하면 GitHub Actions 를 깨워
 * news.json 커밋 → 서버 배포까지 자동으로 진행된다.
 *
 * 평문 메시지를 읽지 않으므로 Message Content 인텐트가 필요 없다.
 */

import {
  ActionRowBuilder,
  Client,
  Events,
  GatewayIntentBits,
  MessageFlags,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
} from "discord.js";

import { config, ensure } from "./config.js";
import { FIELD_IDS, MODAL_ID, NEWS_COMMAND } from "./commands.js";
import { publishNews } from "./publish.js";
import { validateInput } from "./news.js";

ensure("DISCORD_TOKEN", "DISCORD_APP_ID", "DISCORD_GUILD_IDS");

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

/** GuildMember 든 원본 API 데이터든 역할 ID 목록을 뽑아낸다. */
function memberRoleIds(member) {
  const roles = member?.roles;
  if (!roles) return [];
  if (Array.isArray(roles)) return roles;
  if (roles.cache) return [...roles.cache.keys()];
  return [];
}

/**
 * 커맨드는 .env 에 적힌 서버에만 등록되지만, 봇이 다른 서버에 초대된 경우를 대비해
 * 실행 시점에도 한 번 더 막는다.
 */
function isAllowedGuild(interaction) {
  return config.guildIds.includes(interaction.guildId);
}

function isAllowedRole(interaction) {
  if (config.allowedRoleIds.length === 0) return true;
  const mine = memberRoleIds(interaction.member);
  return config.allowedRoleIds.some((id) => mine.includes(id));
}

function buildModal() {
  const row = (input) => new ActionRowBuilder().addComponents(input);

  const text = (id, label, { style, placeholder, max }) =>
    new TextInputBuilder()
      .setCustomId(id)
      .setLabel(label)
      .setStyle(style)
      .setPlaceholder(placeholder)
      .setMaxLength(max)
      .setRequired(true);

  return new ModalBuilder()
    .setCustomId(MODAL_ID)
    .setTitle("News 추가")
    .addComponents(
      row(
        text(FIELD_IDS.date, "날짜 (YYYY.MM)", {
          style: TextInputStyle.Short,
          placeholder: "예: 2026.09 — 월을 모르면 2026 처럼 연도만",
          max: 7,
        }),
      ),
      row(
        text(FIELD_IDS.title_ko, "한국어 제목", {
          style: TextInputStyle.Short,
          placeholder: "예: 홍길동, NeurIPS 2026 논문 게재 확정",
          max: 200,
        }),
      ),
      row(
        text(FIELD_IDS.body_ko, "한국어 본문", {
          style: TextInputStyle.Paragraph,
          placeholder: "한두 문장으로 소식을 적어주세요.",
          max: 2000,
        }),
      ),
      row(
        text(FIELD_IDS.title_en, "영문 제목", {
          style: TextInputStyle.Short,
          placeholder: "e.g. Paper accepted to NeurIPS 2026",
          max: 200,
        }),
      ),
      row(
        text(FIELD_IDS.body_en, "영문 본문", {
          style: TextInputStyle.Paragraph,
          placeholder: "영문 페이지에 그대로 나갑니다.",
          max: 2000,
        }),
      ),
    );
}

/**
 * 커맨드를 쓴 채널에 공개 기록을 남긴다.
 * Actions 로그가 없는 구조라, 누가 언제 무엇을 올렸는지 채널에 남겨두는 게 유일한 기록이다.
 */
async function announce(interaction, item, deployed) {
  const lines = [
    `📰 News ${deployed ? "반영" : "커밋"} — ${interaction.user}`,
    `**${item.date}** ${item.title.ko}`,
    `\`${item.id}\``,
  ];
  // 권한이 없거나 채널을 못 읽어도 발행 자체는 성공이므로 조용히 넘어간다.
  await interaction.channel?.send({ content: lines.join("\n") }).catch(() => {});
}

client.once(Events.ClientReady, (c) => {
  console.log(`[bot] 로그인: ${c.user.tag}`);

  for (const guildId of config.guildIds) {
    const guild = c.guilds.cache.get(guildId);
    console.log(
      guild
        ? `[bot] 서버: ${guild.name} (${guildId})`
        : `[bot] 경고: 서버 ${guildId} 에 봇이 없습니다 — 초대가 필요합니다.`,
    );
  }

  console.log(
    config.allowedRoleIds.length > 0
      ? `[bot] /news 허용 역할: ${config.allowedRoleIds.join(", ")}`
      : "[bot] 경고: ALLOWED_ROLE_IDS 가 비어 있어 모든 서버의 전원이 /news 를 쓸 수 있습니다.",
  );
});

client.on(Events.InteractionCreate, async (interaction) => {
  try {
    if (interaction.isChatInputCommand() && interaction.commandName === NEWS_COMMAND.name) {
      if (!isAllowedGuild(interaction)) {
        console.warn(`[bot] 허용되지 않은 서버에서 호출: ${interaction.guildId}`);
        await interaction.reply({
          content: "이 서버에서는 사용할 수 없는 커맨드입니다.",
          flags: MessageFlags.Ephemeral,
        });
        return;
      }
      if (!isAllowedRole(interaction)) {
        await interaction.reply({
          content: "이 커맨드를 쓸 권한이 없습니다. 홈페이지 담당자에게 문의해주세요.",
          flags: MessageFlags.Ephemeral,
        });
        return;
      }
      await interaction.showModal(buildModal());
      return;
    }

    if (interaction.isModalSubmit() && interaction.customId === MODAL_ID) {
      if (!isAllowedGuild(interaction) || !isAllowedRole(interaction)) return;

      const raw = Object.fromEntries(
        Object.values(FIELD_IDS).map((id) => [id, interaction.fields.getTextInputValue(id)]),
      );

      const result = validateInput(raw);
      if (!result.ok) {
        await interaction.reply({
          content: `❌ 입력을 확인해주세요.\n${result.errors.map((e) => `- ${e}`).join("\n")}`,
          flags: MessageFlags.Ephemeral,
        });
        return;
      }

      // 커밋부터 빌드까지 수 분이 걸리므로 3초 응답 제한을 피해 먼저 defer 한다.
      await interaction.deferReply({ flags: MessageFlags.Ephemeral });

      const headline = `**${result.value.date}** — ${result.value.title.ko}`;

      // 앞선 요청이 처리 중이면 순서를 기다리므로, 그동안 보여줄 초기 상태를 먼저 띄운다.
      await interaction.editReply(`⏳ 접수됨 — 순서를 기다리는 중\n\n${headline}`);

      // 진행 상황을 같은 메시지에 갱신해 보여준다.
      const onProgress = (step) => {
        interaction
          .editReply(`⏳ ${step}\n\n${headline}`)
          .catch(() => {}); // 갱신 실패는 무시 — 본 작업을 막을 이유가 없다
      };

      const { item, deployed } = await publishNews(result.value, onProgress);

      await interaction.editReply(
        [
          deployed
            ? "✅ 홈페이지에 반영됐습니다."
            : "✅ 커밋됐습니다 (배포는 생략됨).",
          "",
          headline,
          `id: \`${item.id}\``,
          deployed ? "https://cpss.cau.ac.kr/news" : "",
        ]
          .filter(Boolean)
          .join("\n"),
      );

      await announce(interaction, item, deployed);
    }
  } catch (err) {
    console.error("[bot] 처리 실패:", err);
    const message = `⚠️ 처리 중 오류가 발생했습니다.\n\`${String(err.message).slice(0, 300)}\``;
    if (interaction.isRepliable()) {
      if (interaction.deferred || interaction.replied) {
        await interaction.editReply(message).catch(() => {});
      } else {
        await interaction.reply({ content: message, flags: MessageFlags.Ephemeral }).catch(() => {});
      }
    }
  }
});

client.login(config.token);
