"use client";

import styled from "styled-components";

export const Section = styled.section`
  margin-bottom: 72px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const List = styled.ol`
  list-style: none;
`;

export const Item = styled.li`
  padding: 22px 0;
  border-bottom: 1px solid var(--line);

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;


export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-width: 0;
`;

export const Title = styled.h3`
  font-size: 0.98rem;
  font-weight: 700;
  color: var(--ink);
  line-height: 1.55;
  letter-spacing: -0.01em;
  text-wrap: pretty;
`;

export const People = styled.p`
  font-size: 0.86rem;
  color: var(--muted);
  line-height: 1.55;
`;

export const Details = styled.p`
  font-size: 0.86rem;
  color: var(--navy-700);
  line-height: 1.55;
`;
