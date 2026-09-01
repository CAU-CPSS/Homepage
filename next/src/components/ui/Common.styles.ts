// 페이지 공통 적용 스타일

import styled from "styled-components";

export const PageContainer = styled.div`
  max-width: var(--container);
  background-color: var(--bg);
  margin: 0 auto;
  padding: 72px 28px 96px;

  @media (max-width: 768px) {
    padding: 48px 20px 72px;
  }
`;

export const Section = styled.section`
  margin-bottom: 72px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    margin-bottom: 56px;
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--line);
  margin-bottom: 28px;

  /* 제목 아래에만 네이비 강조선을 짧게 덧댄다 */
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 44px;
    height: 2px;
    background: var(--navy-700);
    border-radius: var(--r-full);
  }
`;

export const SectionLabel = styled.h2`
  font-family: var(--font-montserrat), var(--font-pretendard), sans-serif;
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--navy-700);
`;

/**
 * 큰 섹션 제목 — 홈의 NEWS / RESEARCH / RESEARCH PROJECTS 와
 * /research 의 PROJECTS 가 모두 이 하나를 상속해서 크기가 어긋나지 않게 한다.
 * 색과 정렬만 쓰는 쪽에서 덮어쓴다.
 */
export const SectionTitle = styled.h2`
  font-family: var(--font-montserrat), var(--font-pretendard), sans-serif;
  font-size: 2.5rem;
  font-weight: 650;
  line-height: 1.2;
  letter-spacing: 0.15em;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.55rem;
  }
`;

export const SectionCount = styled.span`
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--subtle);
  letter-spacing: 0.05em;
`;

/** 밝은 배경 카드의 기본형 — 멤버·졸업생·프로젝트 카드가 공유한다. */
export const Card = styled.div`
  padding: 26px;
  border: 1px solid var(--line);
  border-radius: var(--r-lg);
  background: var(--bg);
  transition: box-shadow 0.25s var(--ease), transform 0.25s var(--ease),
    border-color 0.25s var(--ease);

  &:hover {
    border-color: var(--line-strong);
    box-shadow: var(--shadow-md);
    transform: translateY(-2px);
  }

  @media (max-width: 520px) {
    padding: 20px;
  }
`;

/** 회색 배경의 작은 태그 (관심분야·키워드 등) */
export const Tag = styled.span`
  display: inline-block;
  padding: 5px 10px;
  border-radius: var(--r-full);
  background: var(--surface-2);
  color: var(--body);
  font-size: 0.72rem;
  font-weight: 500;
  line-height: 1.3;
`;
