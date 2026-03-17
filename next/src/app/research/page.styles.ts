import styled, { css, keyframes } from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    padding: 25px;
  }
`;

export const ResearchSection = styled.section<{ $reverse?: boolean; $visible?: boolean }>`
  display: flex;
  align-items: center;
  gap: 60px;
  min-height: 520px;
  flex-direction: ${({ $reverse }) => ($reverse ? 'row-reverse' : 'row')};

  opacity: 0;
  transform: translateY(28px);
  transition:
    opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);

  ${({ $visible }) => $visible && css`
    opacity: 1;
    transform: translateY(0);
  `}

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    min-height: unset;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 500px;
  height: 500px;
  border-radius: 100%;
  flex-shrink: 0;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(26,42,108,0.2) 0%, transparent 55%);
    transition: opacity 0.45s ease;
    z-index: 1;
  }

  &:hover::after { opacity: 0; }

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
    margin-bottom: 20px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);

  ${ImageWrapper}:hover & {
    transform: scale(1.05);
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const IndexLabel = styled.span`
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #1a2a6c;
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const Title = styled.h1`
  font-size: 1.7rem;
  font-weight: 700;
  color: #111827;
  line-height: 1.25;
  letter-spacing: -0.02em;
`;

export const Divider = styled.div`
  width: 36px;
  height: 2.2px;
  background: #1a2a6c;
  border-radius: 2px;

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

export const Description = styled.p`
  line-height: 1.6;
  color: rgb(17, 24, 39, 0.7);
`;