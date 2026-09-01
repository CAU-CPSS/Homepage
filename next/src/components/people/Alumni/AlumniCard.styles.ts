"use client";

import styled from "styled-components";

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 24px;
  border: 1px solid var(--line);
  border-radius: var(--r-lg);
  background: #ffffff;
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

export const TopRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
`;

export const Name = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--ink);
  letter-spacing: -0.01em;
`;

export const Year = styled.span`
  font-family: var(--font-montserrat), sans-serif;
  flex-shrink: 0;
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--subtle);
`;

export const Degree = styled.p`
  font-size: 0.84rem;
  font-weight: 600;
  color: var(--navy-700);
`;

export const Major = styled.p`
  font-size: 0.84rem;
  color: var(--muted);
`;

export const Status = styled.p`
  margin-top: 8px;
  padding-top: 10px;
  border-top: 1px solid var(--line);
  font-size: 0.84rem;
  line-height: 1.5;
  color: var(--body);
`;
