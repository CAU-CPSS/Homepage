"use client";

import styled from "styled-components";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { peoplePages } from "@/content/site";
import { useT } from "@/lib/i18n";

/** Professor / Members / Alumni 를 오가는 상단 탭. 세 페이지가 공유한다. */
export default function PeopleTabs() {
  const pathname = usePathname();
  const t = useT();
  const active = peoplePages.find((page) => page.href === pathname);

  return (
    <Wrapper>
      <TabList>
        {peoplePages.map((page) => (
          <Tab key={page.href} href={page.href} $active={page.href === pathname}>
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

const TabList = styled.nav`
  display: inline-flex;
  gap: 4px;
  padding: 4px;
  border: 1px solid var(--line);
  border-radius: var(--r-full);
  background: var(--surface);
`;

const Tab = styled(Link)<{ $active: boolean }>`
  font-family: var(--font-montserrat), sans-serif;
  padding: 8px 18px;
  border-radius: var(--r-full);
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
  transition: background 0.2s var(--ease), color 0.2s var(--ease);

  background: ${({ $active }) => ($active ? "var(--navy-700)" : "transparent")};
  color: ${({ $active }) => ($active ? "#ffffff" : "var(--muted)")};

  &:hover {
    color: ${({ $active }) => ($active ? "#ffffff" : "var(--navy-700)")};
  }

  @media (max-width: 480px) {
    padding: 8px 13px;
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
