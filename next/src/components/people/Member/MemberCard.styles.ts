import styled from "styled-components";

export const Card = styled.div`
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 0 28px;
  padding: 28px;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  background: #fff;

  @media (max-width: 520px) {
    grid-template-columns: 100px 1fr;
    gap: 0 20px;
    padding: 20px;
  }
`;

export const PhotoCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
`;

export const PhotoWrapper = styled.div`
  width: 120px;
  height: 160px;
  overflow: hidden;
  border: 1px solid #e5e7eb;
  flex-shrink: 0;

  @media (max-width: 520px) {
    width: 90px;
    height: 120px;
  }
`;

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  display: block;
`;

export const PhotoPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 700;
  color: #9ca3af;
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

export const Row = styled.div`
  margin-top: 4px;
`;

export const FieldBadge = styled.span`
  display: inline-block;
  padding: 5px 10px;
  border: 1px solid #0f1923;
  color: #0f1923;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  border-radius: 50px;
`;

export const Major = styled.p`
  font-size: 0.88rem;
  color: #4b5563;
`;

export const Background = styled.p`
  font-size: 0.88rem;
  color: #9ca3af;
`;

export const InterestList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 4px;
`;

export const InterestTag = styled.span`
  display: inline-block;
  padding: 4px 6px;
  background: #f3f4f6;
  color: #374151;
  font-size: 11px;
  font-weight: 500;
  border-radius: 3px;
`;