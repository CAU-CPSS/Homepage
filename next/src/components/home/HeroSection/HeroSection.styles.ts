"use client";

import styled, { keyframes } from "styled-components";

export const Wrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: var(--nav-h) 25px 120px;
  height: 100vh;
  height: 100svh;
  width: 100%;
  color: #fff;
  overflow: hidden;

  /* HeroBackground 캔버스는 clearRect 로 그려서 배경이 투명하다 */
  background: var(--hero-bg);
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 5.5rem;
  font-weight: 650;
  letter-spacing: -0.03em;
  color: #ffffff;

  @media (max-width: 1024px) {
    font-size: 4rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Description = styled.p`
  margin-top: 14px;
  font-size: 1.25rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.82);

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Tagline = styled.p`
  margin-top: 22px;
  max-width: 620px;
  font-size: 0.95rem;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.56);

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

const bob = keyframes`
  0%, 100% { transform: translate(-50%, 0); opacity: 0.55; }
  50%      { transform: translate(-50%, 8px); opacity: 1; }
`;

export const Scroll = styled.div`
  position: absolute;
  bottom: 28px;
  left: 50%;
  z-index: 2;
  font-size: 26px;
  color: rgba(255, 255, 255, 0.85);
  animation: ${bob} 2.4s var(--ease) infinite;
`;
