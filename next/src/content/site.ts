import type { Localized } from "@/lib/i18n";

/** 연구실 기본 정보 — 헤더·푸터·Contact·메타데이터가 모두 여기서 가져다 쓴다. */
export const site = {
  shortName: "CPSS Lab",
  labName: {
    ko: "중앙대학교 사이버물리시스템 보안 연구실",
    en: "Cyber-Physical System Security Lab, Chung-Ang University",
  },
  university: {
    ko: "중앙대학교 산업보안학과 · 일반대학원 융합보안학과",
    en: "Dept. of Industrial Security & Graduate School of Security Convergence, Chung-Ang University",
  },
  tagline: {
    ko: "사이버물리시스템의 안전성과 보안, 그리고 그 위에서 동작하는 AI를 시스템 관점에서 연구합니다.",
    en: "We study the safety and security of cyber-physical systems, and the AI that runs on top of them, from a systems perspective.",
  },
  address: {
    ko: "서울시 동작구 흑석로 84, 중앙대학교 310관 1139호",
    en: "Room 1139, Bldg. 310, Chung-Ang University, 84 Heukseok-ro, Dongjak-gu, Seoul, Republic of Korea",
  },
  tel: "(02) 820-5935",
  emails: ["jaewoo.cau@gmail.com", "jaewoolee@cau.ac.kr"],
} satisfies Record<string, unknown>;

/**
 * 네비게이션 — 데스크톱 메뉴와 모바일 드로어가 이 배열 하나를 공유한다.
 * 메뉴명은 한/영 구분 없이 항상 영어를 쓰므로 label 은 그냥 문자열이다.
 */
export interface NavNode {
  href: string;
  label: string;
  /** 활성화 판정용 경로 접두사. 없으면 href 와 정확히 일치할 때만 활성화. */
  match?: string;
  children?: NavNode[];
}

/**
 * People 하위 페이지 정의.
 * 헤더 드롭다운 · People 페이지 상단 탭이 전부 이 배열 하나를 쓴다.
 */
export const peoplePages = [
  {
    href: "/members/professor",
    label: "Professor",
    description: {
      ko: "연구실을 이끄는 지도교수의 학력·경력과 주요 연구 활동을 소개합니다.",
      en: "Education, career, and academic activities of the lab's principal investigator.",
    },
  },
  {
    href: "/members",
    label: "Members",
    description: {
      ko: "연구실에서 함께 연구하고 있는 대학원생과 학부연구생입니다.",
      en: "Graduate students and undergraduate researchers currently in the lab.",
    },
  },
  {
    href: "/alumni",
    label: "Alumni",
    description: {
      ko: "연구실을 거쳐 각 분야에서 활동하고 있는 졸업생입니다.",
      en: "Alumni who have moved on from the lab to careers in a range of fields.",
    },
  },
] satisfies { href: string; label: string; description: Localized }[];

export const navigation: NavNode[] = [
  { href: "/", label: "Home" },
  { href: "/research", label: "Research", match: "/research" },
  {
    href: peoplePages[0].href,
    match: "/members",
    label: "People",
    children: peoplePages,
  },
  { href: "/publications", label: "Publications" },
  { href: "/news", label: "News", match: "/news" },
  { href: "/contact", label: "Contact" },
];

/** People 드롭다운은 /members 와 /alumni 두 경로를 함께 활성화 판정해야 한다. */
export const peoplePathPrefixes = ["/members", "/alumni"];

/** 여러 페이지에서 반복되는 짧은 UI 문구 모음. */
export const ui = {
  viewMore: { ko: "자세히 보기", en: "View More" },
  viewAll: { ko: "전체 보기", en: "View All" },
  openMenu: { ko: "메뉴 열기", en: "Open menu" },
  closeMenu: { ko: "메뉴 닫기", en: "Close menu" },
  preparing: { ko: "준비 중입니다", en: "Coming soon" },
  preparingDesc: {
    ko: "콘텐츠를 준비하고 있습니다. 곧 업데이트될 예정입니다.",
    en: "This section is being prepared and will be updated soon.",
  },
  period: { ko: "연구기간", en: "Period" },
  support: { ko: "지원기관", en: "Support" },
  scrollDown: { ko: "아래로 스크롤", en: "Scroll down" },
} satisfies Record<string, Localized>;
