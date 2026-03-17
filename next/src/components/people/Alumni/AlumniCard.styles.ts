import styled from "styled-components";

export const Card = styled.div`
  padding: 28px;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  background: #fff;
  transition: box-shadow 0.2s ease, transform 0.2s ease;

  &:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
  }

  @media (max-width: 520px) {
    padding: 20px;
  }
`;

export const InfoCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Name = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: #0f1923;
  letter-spacing: -0.01em;
`;

export const Degree = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  color: #1a2a6c;
`;

export const Major = styled.p`
  font-size: 0.88rem;
  color: #4b5563;
`;

export const Status = styled.p`
  font-size: 0.88rem;
  color: #4b5563;
  line-height: 1.5;
`;