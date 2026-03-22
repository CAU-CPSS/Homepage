import styled from "styled-components";

export const Section = styled.section`
  margin-bottom: 50px;
  &:last-child { margin-bottom: 0; }
`;

export const Grid = styled.div<{ $single?: boolean }>`
  display: grid;
  grid-template-columns: ${({ $single }) => $single ? "minmax(0, 560px)" : "repeat(2, 1fr)"};
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;