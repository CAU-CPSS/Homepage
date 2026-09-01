"use client";

import styled, { css } from "styled-components";

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 28px;
  border: 1px solid var(--line);
  border-radius: var(--r-lg);
  background: #ffffff;
  box-shadow: var(--shadow-sm);
  transition: box-shadow 0.25s var(--ease), border-color 0.25s var(--ease);

  &:hover {
    border-color: var(--line-strong);
    box-shadow: var(--shadow-md);
  }

  @media (max-width: 520px) {
    padding: 22px;
  }
`;

export const CardTitleArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 20px;
`;

export const TypeBadge = styled.span<{ $principal: boolean }>`
  padding: 2px 6px;
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

export const CardTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--ink);
  line-height: 1.55;
  letter-spacing: -0.02em;
  text-wrap: pretty;
`;

export const CardDivider = styled.hr`
  border: none;
  border-top: 1px solid var(--line);
  margin-bottom: 18px;
`;

export const CardMeta = styled.dl`
  display: grid;
  grid-template-columns: 68px 1fr;
  gap: 10px 14px;
  align-items: baseline;
`;

export const MetaBadge = styled.dt`
  justify-self: start;
  padding: 4px 6px;
  border-radius: 3px;
  background-color: var(--navy-700);
  color: #ffffff;
  font-size: 11px;
  font-weight: 500;
  line-height: 1.4;
`;

export const MetaText = styled.dd`
  font-size: 0.85rem;
  line-height: 1.5;
  color: var(--body);
`;
