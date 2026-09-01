"use client";

import styled from "styled-components";
import { LANGS, useLanguage, type Lang } from "@/lib/i18n";

const LABEL: Record<Lang, string> = { ko: "KOR", en: "ENG" };

/** KOR / ENG 전환 스위치. 네비게이션(데스크톱·모바일) 양쪽에서 공유한다. */
export default function LangToggle({
  onDark = false,
  className,
}: {
  /** 어두운 배경 위에 올라갈 때 (히어로 상단의 투명 네비) */
  onDark?: boolean;
  className?: string;
}) {
  const { lang, setLang } = useLanguage();

  return (
    <Group role="group" aria-label="Language" $onDark={onDark} className={className}>
      {LANGS.map((code) => (
        <Option
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          $active={lang === code}
          $onDark={onDark}
        >
          {LABEL[code]}
        </Option>
      ))}
    </Group>
  );
}

const Group = styled.div<{ $onDark: boolean }>`
  display: inline-flex;
  align-items: center;
  padding: 2px;
  border-radius: var(--r-full);
  border: 1px solid
    ${({ $onDark }) => ($onDark ? "rgba(255,255,255,0.28)" : "var(--line)")};
  background: ${({ $onDark }) => ($onDark ? "rgba(255,255,255,0.08)" : "var(--surface)")};
  transition: background 0.25s var(--ease), border-color 0.25s var(--ease);
`;

const Option = styled.button<{ $active: boolean; $onDark: boolean }>`
  font-family: var(--font-montserrat), sans-serif;
  cursor: pointer;
  border: none;
  border-radius: var(--r-full);
  padding: 5px 10px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  line-height: 1;
  transition: background 0.2s var(--ease), color 0.2s var(--ease);

  ${({ $active, $onDark }) => {
    if ($active) {
      return $onDark
        ? "background: #ffffff; color: var(--navy-800);"
        : "background: var(--navy-700); color: #ffffff;";
    }
    return $onDark
      ? "background: transparent; color: rgba(255,255,255,0.72);"
      : "background: transparent; color: var(--muted);";
  }}

  &:hover {
    color: ${({ $active, $onDark }) =>
      $active ? undefined : $onDark ? "#ffffff" : "var(--navy-700)"};
  }
`;
