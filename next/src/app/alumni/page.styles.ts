import styled from "styled-components";

export const Section = styled.section`
  margin-bottom: 50px;
  &:last-child { margin-bottom: 0; }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;