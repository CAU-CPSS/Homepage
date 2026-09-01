"use client";

import styled from "styled-components";
import Link from "next/link";

import { SectionTitle } from "@/components/ui/Common.styles";

/**
 * 히어로에서 Research 로 이어지는 사이의 어두운 섹션.
 * 히어로와 같은 색에서 시작해 Research 캔버스 색(--navy-950)으로 자연스럽게 넘어간다.
 */
export const Section = styled.section`
  position: relative;
  padding: 96px 28px 88px;
  background: linear-gradient(to bottom, var(--hero-bg) 0%, var(--navy-950) 100%);

  @media (max-width: 768px) {
    padding: 72px 20px 64px;
  }
`;

export const Inner = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

export const Head = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
  padding-bottom: 18px;
  border-bottom: 1px solid var(--on-dark-line);
  margin-bottom: 8px;
`;

export const Title = styled(SectionTitle)`
  color: #ffffff;
`;

export const ViewAll = styled(Link)`
  font-family: var(--font-montserrat), sans-serif;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--on-dark-muted);
  transition: color 0.2s var(--ease), gap 0.2s var(--ease);

  &:hover {
    color: var(--accent-bright);
    gap: 10px;
  }
`;

export const List = styled.ul`
  list-style: none;
`;

export const Item = styled.li`
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);

  &:last-child {
    border-bottom: none;
  }
`;

export const Row = styled(Link)`
  display: grid;
  grid-template-columns: 92px 92px 1fr;
  align-items: baseline;
  gap: 0 18px;
  padding: 20px 8px;
  margin: 0 -8px;
  border-radius: var(--r-md);
  text-decoration: none;
  transition: background 0.2s var(--ease);

  &:hover {
    background: rgba(255, 255, 255, 0.04);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 8px;
    padding: 18px 8px;
  }
`;

export const Date = styled.span`
  font-family: var(--font-montserrat), sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: var(--on-dark-subtle);
  white-space: nowrap;
`;

export const Category = styled.span<{ $category: string }>`
  justify-self: start;
  padding: 4px 10px;
  border-radius: var(--r-full);
  font-family: var(--font-montserrat), sans-serif;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;
  color: ${({ $category }) =>
    $category === "career" ? "#ffd479" : "var(--accent-bright)"};
  border: 1px solid
    ${({ $category }) =>
      $category === "career" ? "rgba(255, 212, 121, 0.4)" : "rgba(0, 229, 255, 0.35)"};
  background: ${({ $category }) =>
    $category === "career" ? "rgba(255, 212, 121, 0.08)" : "rgba(0, 229, 255, 0.07)"};
`;

export const ItemTitle = styled.p`
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.55;
  color: #ffffff;

  ${Row}:hover & {
    color: var(--accent-bright);
  }
`;

export const Empty = styled.p`
  padding: 40px 0;
  text-align: center;
  color: var(--on-dark-subtle);
`;
