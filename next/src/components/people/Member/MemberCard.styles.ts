"use client";

import styled from "styled-components";

export const Card = styled.article`
  display: grid;
  grid-template-columns: 130px minmax(0, 1fr);
  gap: 0 26px;
  padding: 26px;
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
    grid-template-columns: 96px minmax(0, 1fr);
    gap: 0 18px;
    padding: 20px;
  }
`;

export const PhotoWrapper = styled.div`
  width: 100%;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: var(--r-md);
  background: var(--surface);
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
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--surface-2);
  font-family: var(--font-montserrat), sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: var(--subtle);
`;

export const InfoCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-width: 0;
`;

export const Name = styled.h3`
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--ink);
  letter-spacing: -0.01em;
`;

export const Degree = styled.p`
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--navy-700);
`;

export const Major = styled.p`
  font-size: 0.85rem;
  color: var(--muted);
`;

export const Background = styled.p`
  font-size: 0.85rem;
  color: var(--subtle);
`;

export const InterestLabel = styled.p`
  margin-top: 12px;
  font-family: var(--font-montserrat), var(--font-pretendard), sans-serif;
  font-size: 0.66rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--subtle);
`;

export const InterestList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 7px;
`;

export const InterestTag = styled.span`
  padding: 4px 9px;
  border-radius: var(--r-full);
  background: var(--surface-2);
  color: var(--body);
  font-size: 0.7rem;
  font-weight: 500;
  line-height: 1.4;
`;
