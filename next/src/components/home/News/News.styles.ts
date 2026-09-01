"use client";

import styled from "styled-components";
import Link from "next/link";

import { SectionTitle } from "@/components/ui/Common.styles";

/**
 * 밝은 Projects 섹션과 어두운 푸터 사이에 놓이는 섹션.
 * 아래로 갈수록 푸터 색(--navy-950)에 맞춰져 경계 없이 이어진다.
 */
export const Section = styled.section`
  position: relative;
  padding: 100px 28px;
  background: linear-gradient(to bottom, var(--navy-900) 0%, var(--navy-950) 100%);

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

  /*
    아래로 갈수록 살짝 옅어지게 한다. 섹션 배경이 그라데이션이라
    덮개를 얹으면 색이 안 맞으므로 mask 로 내용 자체를 흐린다.
    완전히 투명해지면 마지막 줄을 못 읽으니 40% 까지만 내린다.
  */
  mask-image: linear-gradient(
    to bottom,
    #000 0%,
    #000 62%,
    rgba(0, 0, 0, 0.4) 100%
  );
  -webkit-mask-image: linear-gradient(
    to bottom,
    #000 0%,
    #000 62%,
    rgba(0, 0, 0, 0.4) 100%
  );
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
  display: inline-flex;
  align-items: center;
  padding: 5px 13px;
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: var(--r-full);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  color: rgba(255, 255, 255, 0.65);
  text-decoration: none;
  transition: color 0.2s var(--ease), border-color 0.2s var(--ease),
    background 0.2s var(--ease);

  &:hover {
    color: #ffffff;
    border-color: rgba(255, 255, 255, 0.5);
    background: rgba(255, 255, 255, 0.08);
  }
`;

export const Empty = styled.p`
  padding: 40px 0;
  text-align: center;
  color: rgba(255, 255, 255, 0.4);
`;
