"use client";

import styled from "styled-components";

export const Filters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 36px;
`;

export const FilterChip = styled.button<{ $active: boolean }>`
  font-family: var(--font-montserrat), var(--font-pretendard), sans-serif;
  padding: 7px 14px;
  border-radius: var(--r-full);
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 600;
  transition: background 0.2s var(--ease), color 0.2s var(--ease),
    border-color 0.2s var(--ease);

  border: 1px solid ${({ $active }) => ($active ? "var(--navy-700)" : "var(--line)")};
  background: ${({ $active }) => ($active ? "var(--navy-700)" : "#ffffff")};
  color: ${({ $active }) => ($active ? "#ffffff" : "var(--muted)")};

  &:hover {
    border-color: ${({ $active }) => ($active ? "var(--navy-700)" : "var(--line-strong)")};
    color: ${({ $active }) => ($active ? "#ffffff" : "var(--navy-700)")};
  }
`;

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
    background: var(--navy-50);
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

export const Meta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  @media (max-width: 640px) {
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }
`;

export const Date = styled.span`
  font-family: var(--font-montserrat), sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: var(--navy-700);
  white-space: nowrap;
`;

export const Category = styled.span`
  padding: 3px 9px;
  border-radius: var(--r-full);
  border: 1px solid var(--line);
  background: var(--surface);
  font-family: var(--font-montserrat), var(--font-pretendard), sans-serif;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: var(--muted);
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
