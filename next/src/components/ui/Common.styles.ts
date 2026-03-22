// 페이지 공통 적용 스타일

import styled from "styled-components";

export const PageContainer = styled.div`
  background-color: #ffffff;
  margin: 0 auto;
  padding: 50px;

  @media (max-width: 768px) {
    padding: 50px 25px;
  }
`;

export const Section = styled.section`
  margin-bottom: 50px;
  &:last-child { margin-bottom: 0; }
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding-bottom: 14px;
  border-bottom: 2px solid #1a2a6c;
  margin-bottom: 24px;
`;

export const SectionLabel = styled.h1`
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #1a2a6c;
`;

export const SectionCount = styled.span`
  font-size: 0.8rem;
  font-weight: 600;
  color: rgb(17, 24, 39, 0.7);
  letter-spacing: 0.05em;
`;