import type { Localized } from "@/lib/i18n";

/**
 * 데이터 JSON 안에서 반복되는 짧은 용어의 한/영 대응표.
 *
 * members.json / alumni.json 은 유지보수 편의를 위해 영어 한 벌만 저장하고,
 * 화면에 뿌릴 때 이 표를 통해 현재 언어로 바꾼다.
 * 표에 없는 값은 원문을 그대로 돌려주므로, 새 값이 들어와도 화면이 깨지지 않는다.
 */
const TERMS: Record<string, Localized> = {
  /* 직위 · 학위 */
  "Professor": { ko: "교수", en: "Professor" },
  "Post Doctor": { ko: "박사후연구원", en: "Postdoctoral Researcher" },
  "Ph.D. candidate": { ko: "박사과정", en: "Ph.D. Candidate" },
  "Master degree course student": { ko: "석사과정", en: "Master's Student" },
  "Undergraduate researcher": { ko: "학부연구생", en: "Undergraduate Researcher" },
  "Master": { ko: "석사", en: "Master" },
  "Bachelor": { ko: "학사", en: "Bachelor" },
  "Undergraduate": { ko: "학부", en: "Undergraduate" },

  /* 소속 · 학과 */
  "Industrial Security, Chung-Ang Univ.": {
    ko: "중앙대학교 산업보안학과",
    en: "Industrial Security, Chung-Ang Univ.",
  },
  "Security Convergence, CAU": {
    ko: "중앙대학교 융합보안학과",
    en: "Security Convergence, CAU",
  },
  "Industrial Security, CAU": {
    ko: "중앙대학교 산업보안학과",
    en: "Industrial Security, CAU",
  },
  "Art & Technology, CAU": {
    ko: "중앙대학교 예술공학부",
    en: "Art & Technology, CAU",
  },
  "Computer Science, San Jose State University": {
    ko: "San Jose State University 컴퓨터과학과",
    en: "Computer Science, San Jose State University",
  },
  "Security Convergence": { ko: "융합보안학과", en: "Security Convergence" },
  "Industrial Security": { ko: "산업보안학과", en: "Industrial Security" },
  "Business Administration": { ko: "경영학부", en: "Business Administration" },
  "Computer Science & Engineering": {
    ko: "소프트웨어학부",
    en: "Computer Science & Engineering",
  },

  /* 학교 */
  "CAU": { ko: "중앙대학교", en: "CAU" },
  "SKKU": { ko: "성균관대학교", en: "SKKU" },

  /* 학력 배경 */
  "Ph.D. in Computer and Information Science, Univ. of Pennsylvania": {
    ko: "University of Pennsylvania 컴퓨터정보과학 박사",
    en: "Ph.D. in Computer and Information Science, Univ. of Pennsylvania",
  },
  "Ph.D. in Information Security": {
    ko: "정보보호 박사",
    en: "Ph.D. in Information Security",
  },
};

/** 표에 있으면 현재 언어의 값을, 없으면 원문을 그대로 돌려준다. */
export function term(value: string): Localized {
  return TERMS[value] ?? { ko: value, en: value };
}

/** 과제 유형 배지 — projects.json 의 type 값과 1:1 대응. */
export const projectTypes = {
  principal: { ko: "개인과제", en: "Principal Investigator" },
  participating: { ko: "참여과제", en: "Co-Investigator" },
} satisfies Record<string, Localized>;

export type ProjectType = keyof typeof projectTypes;

/** News 카테고리 배지. */
export const newsCategories = {
  paper: { ko: "논문", en: "Paper" },
  career: { ko: "진로", en: "Career" },
  award: { ko: "수상", en: "Award" },
  project: { ko: "과제", en: "Project" },
  notice: { ko: "공지", en: "Notice" },
} satisfies Record<string, Localized>;

export type NewsCategory = keyof typeof newsCategories;
