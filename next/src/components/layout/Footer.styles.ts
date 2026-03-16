"use client";

import styled from "styled-components";

export const FooterOuter = styled.footer`
  width: 100%;
  padding: 30px 20px;
  background: #2e3149;
`;

export const FooterInner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

export const FooterGrid = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`;

export const Column = styled.div`
  flex: 1;
  min-width: 250px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  letter-spacing: 2px;
  font-weight: 600;
  color: #fff;
  margin: 0;
`;

export const Info = styled.p`
  color: #fff;
  line-height: 1.6;
  margin: 0;
  text-align: center;
`;

export const Divider = styled.span`
  height: 1px;
  width: 100%;
  background: #434769;
  display: block;
  margin: 20px 0;
`;

export const Copyright = styled.p`
  color: #767ba7;
  text-align: center;
  font-size: 13px;
  margin: 0;
`;

export const Link = styled.a`
  color: inherit;
  text-decoration: underline;

  &:hover {
    opacity: 0.8;
  }
`;