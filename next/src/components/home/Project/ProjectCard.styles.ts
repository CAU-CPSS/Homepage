"use client";

import styled, { css } from "styled-components";

/**
 * 밝은 카드지만 홈에서는 어두운 배경 위에 올라간다.
 * 순백(#fff)은 눈이 부셔서, 살짝 가라앉은 오프화이트를 쓰고
 * 상단에 네이비 라인을 둬서 카드가 배경에서 또렷하게 떠 보이게 한다.
 */
export const Card = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 28px;
  background: #f4f6fa;
  border: 1px solid #e2e6ee;
  border-top: 3px solid var(--navy-700);
  box-shadow: 0 6px 20px rgba(16, 24, 40, 0.1);
  transition: box-shadow 0.25s var(--ease), transform 0.25s var(--ease);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 28px rgba(16, 24, 40, 0.14);
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
  color: var(--muted);
`;
