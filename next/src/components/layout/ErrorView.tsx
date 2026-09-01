"use client";

import styled from "styled-components";
import Link from "next/link";

interface ErrorViewProps {
  /** 다시 시도 버튼을 눌렀을 때. error.tsx 의 reset 을 그대로 넘긴다. */
  onRetry?: () => void;
}

/** 점검·오류 화면. not-found 와 error 페이지가 함께 쓴다. */
export default function ErrorView({ onRetry }: ErrorViewProps) {
  return (
    <Wrapper>
      <Mark>CPSS Lab</Mark>
      <Title>서버 점검중입니다.</Title>
      <Desc>The site is temporarily unavailable. Please try again later.</Desc>

      <Actions>
        {onRetry && (
          <Retry type="button" onClick={onRetry}>
            다시 시도
          </Retry>
        )}
        <Home href="/">홈으로</Home>
      </Actions>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: var(--nav-h) 24px 80px;
  background: var(--hero-bg);
`;

const Mark = styled.p`
  font-family: var(--font-montserrat), sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  color: rgba(255, 255, 255, 0.35);
  margin-bottom: 26px;
`;

const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: 650;
  color: #ffffff;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const Desc = styled.p`
  margin-top: 14px;
  font-size: 0.92rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.5);
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 32px;
`;

const buttonStyle = `
  font-family: var(--font-montserrat), sans-serif;
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  border-radius: var(--r-full);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.2s var(--ease), border-color 0.2s var(--ease),
    color 0.2s var(--ease);
`;

const Retry = styled.button`
  ${buttonStyle}
  border: none;
  background: #ffffff;
  color: var(--navy-800);

  &:hover {
    background: rgba(255, 255, 255, 0.85);
  }
`;

const Home = styled(Link)`
  ${buttonStyle}
  border: 1px solid rgba(255, 255, 255, 0.28);
  background: transparent;
  color: rgba(255, 255, 255, 0.75);

  &:hover {
    border-color: rgba(255, 255, 255, 0.55);
    color: #ffffff;
  }
`;
