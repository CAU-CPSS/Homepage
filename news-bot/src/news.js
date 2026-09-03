/**
 * News 항목 검증 / 정규화 로직.
 *
 * 봇(입력 즉시 검증)과 워크플로 스크립트(커밋 직전 최종 검증) 양쪽에서 같이 쓴다.
 * 사람이 디스코드에서 손으로 채우는 값이므로, 여기서 막지 못한 건 그대로 홈페이지에 나간다.
 */

/** next/src/content/data.ts 의 NewsItem 주석과 같은 규칙 — "YYYY.MM" 또는 "YYYY" */
const DATE_RE = /^\d{4}(?:\.(?:0[1-9]|1[0-2]))?$/;

const LIMITS = {
  title: 200,
  body: 2000,
};

/**
 * 모달에서 받은 원본 문자열들을 검증한다.
 * @returns {{ ok: true, value: object } | { ok: false, errors: string[] }}
 */
export function validateInput(raw) {
  const errors = [];

  const date = (raw.date ?? "").trim();
  if (!DATE_RE.test(date)) {
    errors.push(`날짜 형식이 올바르지 않습니다: "${date}" — 2026.09 또는 2026 형태로 적어주세요.`);
  }

  const fields = {
    title_ko: { label: "한국어 제목", max: LIMITS.title },
    title_en: { label: "영문 제목", max: LIMITS.title },
    body_ko: { label: "한국어 본문", max: LIMITS.body },
    body_en: { label: "영문 본문", max: LIMITS.body },
  };

  const cleaned = {};
  for (const [key, { label, max }] of Object.entries(fields)) {
    const value = (raw[key] ?? "").trim();
    if (!value) {
      errors.push(`${label}이 비어 있습니다.`);
    } else if (value.length > max) {
      errors.push(`${label}이 너무 깁니다 (${value.length}자 / 최대 ${max}자).`);
    }
    cleaned[key] = value;
  }

  if (errors.length > 0) return { ok: false, errors };

  return {
    ok: true,
    value: {
      date,
      title: { ko: cleaned.title_ko, en: cleaned.title_en },
      body: { ko: cleaned.body_ko, en: cleaned.body_en },
    },
  };
}

/**
 * 영문 제목에서 id 슬러그를 만든다. 기존 id 들이 "2026-emnlp-care" 같은
 * "연도-키워드" 꼴이라 그 관례를 따른다.
 */
function makeSlug(titleEn) {
  const words = titleEn
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    // 의미 없는 불용어는 슬러그에서 뺀다
    .filter((w) => !["a", "an", "the", "of", "to", "at", "in", "on", "for", "and"].includes(w));

  const slug = words.slice(0, 5).join("-").slice(0, 50).replace(/-+$/, "");
  return slug || "news";
}

/**
 * 기존 항목들과 충돌하지 않는 id 를 만든다.
 * 같은 슬러그가 이미 있으면 -2, -3 을 붙인다.
 */
export function makeUniqueId(item, existing) {
  const year = item.date.slice(0, 4);
  const base = `${year}-${makeSlug(item.title.en)}`;
  const taken = new Set(existing.map((e) => e.id));

  if (!taken.has(base)) return base;
  for (let n = 2; n < 100; n++) {
    const candidate = `${base}-${n}`;
    if (!taken.has(candidate)) return candidate;
  }
  throw new Error(`id 생성 실패: "${base}" 계열이 이미 100개 있습니다.`);
}

/**
 * 날짜 내림차순이 유지되는 위치에 항목을 끼워넣는다.
 *
 * 화면 정렬은 data.ts 가 따로 하므로 동작상 위치는 무관하지만,
 * 파일이 항상 최신순으로 정렬돼 있으면 사람이 읽기 쉽고 diff 도 작아진다.
 */
export function insertSorted(list, item) {
  const at = list.findIndex((e) => e.date.localeCompare(item.date) <= 0);
  const next = list.slice();
  if (at === -1) next.push(item);
  else next.splice(at, 0, item);
  return next;
}
