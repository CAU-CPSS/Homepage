"use client";

import styled, { css } from "styled-components";

/**
 * 홈에서는 어두운 파티클 배경 위, /research 에서는 흰 배경 위에 함께 올라간다.
 *
 * 순백은 어두운 배경에서 눈이 부시므로 살짝 비치는 유리판처럼 처리했다.
 * 반투명이라 뒤 배경 밝기를 따라가고(다크에서는 가라앉고 흰 페이지에서는
 * 거의 흰색), blur 로 뒤가 비쳐도 글자를 방해하지 않는다.
 * backdrop-filter 가 안 먹는 환경에서도 반투명 배경만으로 자연스럽게 보인다.
 */
export const Card = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 28px;
  border-radius: var(--r-md);
  background: rgba(240, 243, 248, 0.86);
  backdrop-filter: blur(16px) saturate(140%);
  -webkit-backdrop-filter: blur(16px) saturate(140%);
  border: 1px solid rgba(226, 230, 238, 0.85);
  border-top: 3px solid var(--navy-700);
  box-shadow: 0 8px 28px rgba(8, 16, 34, 0.22);
  transition: box-shadow 0.25s var(--ease), transform 0.25s var(--ease);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 34px rgba(8, 16, 34, 0.28);
  }

  @media (max-width: 520px) {
    padding: 22px;
  }
`;

export const CardTitleArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;
  margin-bottom: 18px;
`;

export const CardTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--ink);
  line-height: 1.6;
  letter-spacing: -0.03em;
  text-wrap: pretty;
`;

export const TypeBadge = styled.span<{ $principal: boolean }>`
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.5;

  ${({ $principal }) =>
    $principal
      ? css`
          color: var(--crimson);
          border: 1px solid var(--crimson);
        `
      : css`
          color: var(--navy-700);
          border: 1px solid var(--navy-700);
        `}
`;

export const CardDivider = styled.hr`
  border: none;
  border-top: 1px solid #dfe3ec;
  margin-bottom: 16px;
`;

export const CardMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
`;

export const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const MetaBadge = styled.span`
  flex-shrink: 0;
  padding: 4px 6px;
  border-radius: 3px;
  background-color: var(--navy-700);
  color: #ffffff;
  font-size: 11px;
  font-weight: 500;
  line-height: 1.4;
`;

export const MetaText = styled.p`
  font-size: 13px;
  line-height: 1.5;
  color: var(--body);
`;
