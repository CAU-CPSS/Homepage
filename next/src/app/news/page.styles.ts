"use client";

import styled from "styled-components";



export const List = styled.ol`
  list-style: none;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: 108px 1fr;
  gap: 0 24px;
  padding: 28px 0;
  border-bottom: 1px solid var(--line);

  &:first-child {
    border-top: 1px solid var(--line);
  }

  /* 홈에서 해시로 들어왔을 때 잠깐 강조 */
  &:target {
    background: var(--surface-2);
    border-radius: var(--r-md);
    padding-left: 18px;
    padding-right: 18px;
    margin-left: -18px;
    margin-right: -18px;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 10px;
    padding: 22px 0;
  }
`;


export const Date = styled.span`
  font-family: var(--font-montserrat), sans-serif;
  padding-top: 2px;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: var(--navy-700);
  white-space: nowrap;
`;


export const Body = styled.div``;

export const Title = styled.h3`
  font-size: 1.05rem;
  font-weight: 700;
  line-height: 1.5;
  color: var(--ink);
  letter-spacing: -0.01em;
`;

export const Text = styled.p`
  margin-top: 8px;
  font-size: 0.92rem;
  line-height: 1.75;
  color: var(--body);
  text-wrap: pretty;
`;

export const Empty = styled.p`
  padding: 64px 0;
  text-align: center;
  color: var(--subtle);
`;
