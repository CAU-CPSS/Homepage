/** 슬래시 커맨드 정의 — register.js(등록)와 index.js(핸들링)가 같은 정의를 본다. */

export const NEWS_COMMAND = {
  name: "news",
  description: "홈페이지 News 에 소식을 추가합니다 (승인 없이 바로 반영됩니다)",
  // 역할 제한은 코드(ALLOWED_ROLE_IDS)와 서버 설정 > 연동 양쪽에서 걸 수 있게 열어둔다.
  dm_permission: false,
};

export const MODAL_ID = "news-modal";

export const FIELD_IDS = {
  date: "date",
  title_ko: "title_ko",
  body_ko: "body_ko",
  title_en: "title_en",
  body_en: "body_en",
};
