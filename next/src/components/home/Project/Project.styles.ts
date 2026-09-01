"use client";

import styled from "styled-components";

import { SectionTitle } from "@/components/ui/Common.styles";

export const Section = styled.section`
  position: relative;
  padding: 100px 0;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 76px 0;
  }
`;

export const Head = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  margin-bottom: 44px;
  padding: 0 28px;
`;

export const Title = styled(SectionTitle)`
  color: #ffffff;
`;


export const SliderRow = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 12px;
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const ArrowBtn = styled.button`
  flex-shrink: 0;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 32px;
  color: rgba(255, 255, 255, 0.55);
  transition: color 0.2s var(--ease);

  &:hover {
    color: #ffffff;
  }

  @media (max-width: 640px) {
    display: none;
  }
`;


export const Viewport = styled.div`
  overflow: hidden;
  width: 100%;
  max-width: 900px;
`;

export const Track = styled.div`
  display: flex;
  align-items: stretch;
  transition: transform 0.6s var(--ease);
`;

export const Slide = styled.div`
  min-width: 100%;
  padding: 4px 6px;
`;

export const Indicators = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 36px;
`;

export const Dot = styled.button<{ $active: boolean }>`
  width: ${({ $active }) => ($active ? "24px" : "6px")};
  height: 6px;
  border-radius: var(--r-full);
  border: none;
  padding: 0;
  cursor: pointer;
  background-color: ${({ $active }) =>
    $active ? "#ffffff" : "rgba(255, 255, 255, 0.28)"};
  transition: width 0.3s var(--ease), background-color 0.3s var(--ease);
`;
