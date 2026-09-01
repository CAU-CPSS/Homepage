"use client";

import styled from "styled-components";
import Link from "next/link";

import { SectionTitle } from "@/components/ui/Common.styles";

/**
 * 히어로에서 Research 로 이어지는 사이의 어두운 섹션.
 * 히어로와 같은 색에서 시작해 Research 캔버스 색(--navy-950)으로 넘어간다.
 */
export const Section = styled.section`
  position: relative;
  padding: 100px 28px;
  background: linear-gradient(to bottom, var(--hero-bg) 0%, var(--navy-950) 100%);

  @media (max-width: 768px) {
    padding: 76px 20px;
  }
`;

export const Inner = styled.div`
  max-width: 820px;
  margin: 0 auto;
`;

export const Title = styled(SectionTitle)`
  text-align: center;
  color: #ffffff;
  margin-bottom: 44px;
`;

/* 목록 오른쪽 위에 붙는 '전체 보기' 줄 */
export const ListHead = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

export const List = styled.ul`
  list-style: none;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
`;

export const Item = styled.li`
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 96px minmax(0, 1fr);
  gap: 0 20px;
  align-items: baseline;
  padding: 18px 2px;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
    gap: 6px;
    padding: 16px 2px;
  }
`;

export const Date = styled.span`
  font-family: var(--font-montserrat), sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: rgba(255, 255, 255, 0.4);
  white-space: nowrap;
`;

export const ItemTitle = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.88);
`;


export const ViewAll = styled(Link)`
  font-family: var(--font-montserrat), sans-serif;
  display: inline-block;
  padding-bottom: 3px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.28);
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: color 0.2s var(--ease), border-color 0.2s var(--ease);

  &:hover {
    color: #ffffff;
    border-color: #ffffff;
  }
`;

export const Empty = styled.p`
  padding: 40px 0;
  text-align: center;
  color: rgba(255, 255, 255, 0.4);
`;
