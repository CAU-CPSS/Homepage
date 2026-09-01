"use client";

import styled from "styled-components";

export const Section = styled.section`
  margin-bottom: 56px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Grid = styled.div<{ $single?: boolean }>`
  display: grid;
  grid-template-columns: ${({ $single }) =>
    $single ? "minmax(0, 560px)" : "repeat(2, minmax(0, 1fr))"};
  gap: 18px;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;
