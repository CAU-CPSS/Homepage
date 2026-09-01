"use client";

import styled from "styled-components";

export const Section = styled.section`
  margin-bottom: 56px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;
