"use client";

import styled, { css } from "styled-components";

/**
 * 같은 카드가 두 곳에서 쓰인다.
 * - /research (흰 배경): 원래 디자인 그대로 — 흰 바탕에 각진 모서리
 * - 홈 (어두운 파티클 배경): 순백은 눈이 부시므로 살짝 비치는 유리판으로
 */
export const Card = styled.article<{ $onDark: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 28px;
  border: 1px solid #e5e7eb;
  border-top: 3px solid var(--navy-700);

  ${({ $onDark }) =>
    $onDark
      ? css`
          border-radius: var(--r-md);
          border-color: rgba(226, 230, 238, 0.85);
          background: rgba(242, 245, 250, 0.93);
          backdrop-filter: blur(16px) saturate(140%);
          -webkit-backdrop-filter: blur(16px) saturate(140%);
          box-shadow: 0 8px 28px rgba(8, 16, 34, 0.22);
        `
      : css`
          background: #ffffff;
        `}

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
  color: var(--muted);
`;
