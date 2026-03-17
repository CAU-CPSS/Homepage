import styled, { css } from "styled-components";

export const Card = styled.div`
  padding: 28px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-top: 3px solid #1a2a6c;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardTitleArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.2rem;
  color: #111827;
  line-height: 1.6;
`;

export const TypeBadge = styled.p<{ $type?: string | null }>`
  padding: 2px 6px;
  font-size: 12px;
  border-radius: 10px;

  ${({ $type }) =>
    $type === "개인과제"
      ? css`
          color: #8b1e2d;
          border: 1px solid #8b1e2d;
        `
      : css`
          color: #1a2a6c;
          border: 1px solid #1a2a6c;
        `}
`;

export const CardDivider = styled.hr`
  border: none;
  border-top: 1px solid #e5e7eb;
  margin-bottom: 16px;
`;

export const CardMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const MetaBadge = styled.span`
  padding: 4px 6px;
  border-radius: 3px;
  background-color: #1a2a6c;
  color: #ffffff;
  font-size: 11px;
`;

export const MetaText = styled.p`
  font-size: 13px;
  color: #6b7280;
`;