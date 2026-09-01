"use client";

import styled from "styled-components";

import { SectionTitle } from "@/components/ui/Common.styles";

export const Section = styled.section`
  position: relative;
  padding: 100px 0;
  background: #fbfbfb;
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
  color: var(--ink);
`;

export const Lead = styled.p`
  max-width: 560px;
  margin: 16px auto 0;
  font-size: 0.95rem;
  line-height: 1.75;
  color: var(--muted);
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
  width: 40px;
  height: 40px;
  border-radius: var(--r-full);
  border: 1px solid var(--line);
  background: #ffffff;
  color: var(--muted);
  font-size: 20px;
  cursor: pointer;
  transition: color 0.2s var(--ease), border-color 0.2s var(--ease),
    box-shadow 0.2s var(--ease);

  &:hover {
    color: var(--navy-700);
    border-color: var(--navy-100);
    box-shadow: var(--shadow-sm);
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
  background-color: ${({ $active }) => ($active ? "var(--navy-700)" : "var(--line-strong)")};
  transition: width 0.3s var(--ease), background-color 0.3s var(--ease);
`;
