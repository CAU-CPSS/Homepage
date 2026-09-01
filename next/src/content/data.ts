/**
 * JSON 데이터에 타입을 입혀 내보내는 곳.
 *
 * 콘텐츠 자체는 계속 src/data/*.json 에서 관리하고(비개발자도 수정 가능),
 * 화면 쪽에서는 항상 이 모듈을 통해 가져다 쓴다.
 */

import type { Localized } from "@/lib/i18n";
import type { NewsCategory, ProjectType } from "./vocab";

import researchJson from "@/data/research.json";
import newsJson from "@/data/news.json";
import projectsJson from "@/data/projects.json";
import professorJson from "@/data/professor.json";

/* ---------------- 연구 분야 ---------------- */

export interface ResearchArea {
  id: string;
  /** 연구 필드 키워드 — 한/영 공통으로 영문 표기를 쓴다. */
  index: string;
  title: string;
  image: string;
  subtitle: Localized;
  summary: Localized;
  keywords: Localized<string[]>;
  description: Localized;
}

export const researchAreas = researchJson as ResearchArea[];

/* ---------------- News ---------------- */

export interface NewsItem {
  id: string;
  /** "YYYY.MM" 또는 "YYYY" — 정확한 월을 모르면 연도만 적는다. */
  date: string;
  category: NewsCategory;
  title: Localized;
  body: Localized;
}

/** 최신순 정렬 — date 문자열이 사전순=시간순이므로 그대로 내림차순 정렬한다. */
export const newsItems = (newsJson as NewsItem[])
  .slice()
  .sort((a, b) => b.date.localeCompare(a.date));

/* ---------------- 연구 과제 ---------------- */

export interface Project {
  sponsor: Localized;
  title: Localized;
  period: string;
  type: ProjectType | null;
}

export const projects = projectsJson as Project[];

/* ---------------- 교수 프로필 ---------------- */

export interface ProfileEntry {
  /** 좌측 기간 컬럼. 한/영이 같으면 그냥 문자열. */
  period?: string | Localized;
  text: Localized;
  /** 보조 설명 (소속·게재지·등록번호 등) */
  note?: Localized;
  /** 여러 항목을 한 줄씩 나열할 때 */
  items?: Localized<string[]>;
}

export interface ProfileSection {
  id: string;
  label: Localized;
  /** "rows"(기본): 기간 + 내용 / "grid": 짧은 항목을 2단으로 */
  layout?: "rows" | "grid";
  entries: ProfileEntry[];
}

export interface Professor {
  name: Localized;
  nameSub: Localized;
  position: Localized;
  affiliation: Localized;
  photo: string;
  emails: string[];
  links: { label: string; href: string }[];
  intro: Localized;
  interests: Localized<string[]>;
  sections: ProfileSection[];
}

export const professor = professorJson as Professor;
