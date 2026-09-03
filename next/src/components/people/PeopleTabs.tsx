"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { peoplePages } from "@/content/site";
import { useT } from "@/lib/i18n";

/*
  탭을 누르면 페이지가 이동하면서 이 컴포넌트도 다시 마운트된다.
  그대로 두면 표시가 새 위치에 그냥 나타나 버리므로, 직전 위치를
  모듈 스코프에 기억해 두었다가 그 자리에서 미끄러져 오게 한다.
  (첫 방문처럼 직전 위치가 없으면 애니메이션 없이 제자리에서 시작)
*/
let lastIndex = -1;

/** Professor / Members / Alumni 를 오가는 상단 탭. 세 페이지가 공유한다. */
export default function PeopleTabs() {
  const pathname = usePathname();
  const t = useT();

  const index = peoplePages.findIndex((page) => page.href === pathname);
  const [thumb, setThumb] = useState(lastIndex < 0 ? index : lastIndex);

  useEffect(() => {
    lastIndex = index;
    // 한 프레임 뒤에 옮겨야 전환이 걸린다
    const id = requestAnimationFrame(() => setThumb(index));
    return () => cancelAnimationFrame(id);
  }, [index]);

  const active = peoplePages[index];

  return (
    <Wrapper>
      <TabList>
        <Thumb $index={thumb} $visible={thumb >= 0} aria-hidden />

        {peoplePages.map((page, i) => (
          <Tab key={page.href} href={page.href} $active={i === index}>
            {page.label}
          </Tab>
        ))}
      </TabList>

      {active && <Description>{t(active.description)}</Description>}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-bottom: 44px;
`;

const PAD = 4;

/*
  inline-flex 는 각 탭이 글자 길이만큼만 차지해 너비가 제각각이 된다.
  그러면 표시(Thumb)를 3등분으로 옮길 수 없으므로, 폭을 고정하고
  탭을 flex 로 균등 분할해 표시가 항상 탭 정중앙에 오도록 한다.
*/
const TabList = styled.nav`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 380px;
  padding: ${PAD}px;
  border: 1px solid var(--line);
  border-radius: var(--r-full);
  background: var(--surface);
`;

/** 선택 표시. 탭을 같은 너비로 두어 translateX 로만 옮긴다. */
const Thumb = styled.span<{ $index: number; $visible: boolean }>`
  position: absolute;
  top: ${PAD}px;
  bottom: ${PAD}px;
  left: ${PAD}px;
  width: calc((100% - ${PAD * 2}px) / ${peoplePages.length});
  border-radius: var(--r-full);
  background: var(--navy-700);
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateX(${({ $index }) => Math.max($index, 0) * 100}%);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s var(--ease);
`;

const Tab = styled(Link)<{ $active: boolean }>`
  font-family: var(--font-montserrat), sans-serif;
  position: relative;
  z-index: 1;
  flex: 1 1 0;
  min-width: 0;
  padding: 8px 10px;
  border-radius: var(--r-full);
  font-size: 0.85rem;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  color: ${({ $active }) => ($active ? "#ffffff" : "var(--muted)")};
  transition: color 0.25s var(--ease);

  &:hover {
    color: ${({ $active }) => ($active ? "#ffffff" : "var(--navy-700)")};
  }

  @media (max-width: 480px) {
    padding: 8px 6px;
    font-size: 0.8rem;
  }
`;

const Description = styled.p`
  margin-top: 18px;
  max-width: 640px;
  font-size: 0.92rem;
  line-height: 1.75;
  color: var(--muted);
`;
