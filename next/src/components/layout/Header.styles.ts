"use client";

import styled from "styled-components";

export const Wrapper = styled.header`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: calc(var(--nav-h) + 88px) 28px 88px;
  background-image: url("/images/header-bg.png");
  background-size: cover;
  background-position: center;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(8, 16, 42, 0.72) 0%,
      rgba(5, 12, 30, 0.86) 100%
    );
  }

  @media (max-width: 768px) {
    padding: calc(var(--nav-h) + 56px) 20px 56px;
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: 720px;
`;

export const Eyebrow = styled.span`
  display: inline-block;
  margin-bottom: 14px;
  padding: 5px 12px;
  border: 1px solid var(--on-dark-line);
  border-radius: var(--r-full);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.78);
  background: rgba(255, 255, 255, 0.06);
`;

export const Title = styled.h1`
  color: #ffffff;
  letter-spacing: 0.02em;
`;

export const Subtitle = styled.p`
  margin-top: 12px;
  font-size: 0.95rem;
  color: var(--on-dark-muted);
  letter-spacing: 0.02em;
`;

export const Description = styled.p`
  margin-top: 18px;
  font-size: 0.95rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.62);
`;
