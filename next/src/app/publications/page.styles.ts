import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  margin: 0 auto;
  padding: 50px;

  @media (max-width: 768px) {
    padding: 50px 25px;
  }
`;

export const Section = styled.section`
  margin-bottom: 72px;

  &:last-child { margin-bottom: 0; }
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding-bottom: 14px;
  border-bottom: 2px solid #1a2a6c;
  margin-bottom: 0;
`;

export const SectionLabel = styled.h1`
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #1a2a6c;
`;

export const SectionCount = styled.span`
  font-size: 0.8rem;
  font-weight: 600;
  color: rgb(17, 24, 39, 0.7);
  letter-spacing: 0.05em;
`;

export const List = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 0 20px;
  padding: 28px 0;
  border-bottom: 1px solid #e5e7eb;

  &:last-child { border-bottom: none; }

  @media (max-width: 768px) {
    grid-template-columns: 40px 1fr;
    gap: 0 14px;
    padding: 24px 0;
  }
`;

export const Code = styled.span`
  font-size: 0.8rem;
  font-weight: 600;
  color: rgb(17, 24, 39, 0.7);
  letter-spacing: 0.05em;
  padding-top: 3.7px;
  white-space: nowrap;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Title = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: #111827;
  line-height: 1.5;
  letter-spacing: -0.01em;
`;

export const People = styled.p`
  font-size: 0.9rem;
  color: rgb(17, 24, 39, 0.7);
  line-height: 1.5;
`;

export const Details = styled.p`
  font-size: 0.9rem;
  color: #1a2a6c;
  line-height: 1.5;
`;