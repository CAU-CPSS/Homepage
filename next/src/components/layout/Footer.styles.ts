"use client";

import styled from "styled-components";

export const FooterOuter = styled.footer`
  width: 100%;
  padding: 36px;
  background: var(--navy-950);

  @media (max-width: 768px) {
    padding: 44px 20px 28px;
  }
`;

export const FooterInner = styled.div`
  max-width: var(--container);
  margin: 0 auto;
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 36px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`;

export const Brand = styled.div``;

export const Title = styled.p`
  font-family: var(--font-montserrat), sans-serif;
  font-size: 1.4rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #ffffff;
`;


/* 좌측 로고와 균형을 맞추기 위해 연락처는 오른쪽 정렬 (모바일 1단에서는 좌측) */
export const ContactCol = styled.div`
  text-align: right;

  @media (max-width: 900px) {
    text-align: left;
  }
`;

export const ColTitle = styled.p`
  font-family: var(--font-montserrat), sans-serif;
  margin-bottom: 12px;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.45);
`;

export const Info = styled.p`
  font-size: 0.85rem;
  line-height: 1.8;
  color: var(--on-dark-muted);
`;




export const Divider = styled.hr`
  border: none;
  height: 1px;
  background: var(--on-dark-line);
  margin: 32px 0 20px;
`;

export const Copyright = styled.p`
  font-size: 0.78rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.35);
  text-align: center;
`;

export const Link_ = styled.a`
  color: inherit;
  text-decoration: underline;
  text-underline-offset: 2px;

  &:hover {
    color: rgba(255, 255, 255, 0.7);
  }
`;
