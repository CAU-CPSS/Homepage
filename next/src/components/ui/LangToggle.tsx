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
  const activeIndex = LANGS.indexOf(lang);

  return (
    <Group role="group" aria-label="Language" $onDark={onDark} className={className}>
      {/* 선택 표시를 각 버튼에 칠하지 않고, 배경 하나를 옮겨서 미끄러지듯 전환한다 */}
      <Thumb $index={activeIndex} $onDark={onDark} aria-hidden />

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

const PAD = 2;

const Group = styled.div<{ $onDark: boolean }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: ${PAD}px;
  border-radius: var(--r-full);
  border: 1px solid
    ${({ $onDark }) => ($onDark ? "rgba(255,255,255,0.28)" : "var(--line)")};
  background: ${({ $onDark }) => ($onDark ? "rgba(255,255,255,0.08)" : "var(--surface)")};
  transition: background 0.25s var(--ease), border-color 0.25s var(--ease);
`;

/** 두 칸 중 한 칸을 덮는 알약. translateX 로 이동한다. */
const Thumb = styled.span<{ $index: number; $onDark: boolean }>`
  position: absolute;
  top: ${PAD}px;
  bottom: ${PAD}px;
  left: ${PAD}px;
  width: calc((100% - ${PAD * 2}px) / ${LANGS.length});
  border-radius: var(--r-full);
  background: ${({ $onDark }) => ($onDark ? "#ffffff" : "var(--navy-700)")};
  transform: translateX(${({ $index }) => $index * 100}%);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), background 0.25s var(--ease);
`;

const Option = styled.button<{ $active: boolean; $onDark: boolean }>`
  font-family: var(--font-montserrat), sans-serif;
  position: relative;
  z-index: 1;
  flex: 1 1 0;
  min-width: 44px;
  cursor: pointer;
  border: none;
  background: none;
  border-radius: var(--r-full);
  padding: 5px 10px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  line-height: 1;
  transition: color 0.25s var(--ease);

  color: ${({ $active, $onDark }) => {
    if ($active) return $onDark ? "var(--navy-800)" : "#ffffff";
    return $onDark ? "rgba(255,255,255,0.72)" : "var(--muted)";
  }};

  &:hover {
    color: ${({ $active, $onDark }) =>
      $active ? undefined : $onDark ? "#ffffff" : "var(--navy-700)"};
  }
`;
