"use client";

import styled from "styled-components";

import { SectionTitle as BaseSectionTitle } from "@/components/ui/Common.styles";

export const Container = styled.div`
  max-width: var(--container);
  margin: 0 auto;
  padding: 80px 28px 96px;

  @media (max-width: 768px) {
    padding: 56px 20px 72px;
  }
`;

export const ResearchSection = styled.section<{ $reverse: boolean; $visible: boolean }>`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.15fr);
  align-items: center;
  gap: 48px;
  margin-bottom: 96px;
  direction: ${({ $reverse }) => ($reverse ? "rtl" : "ltr")};

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? "0" : "28px")});
  transition: opacity 0.7s var(--ease), transform 0.7s var(--ease);

  > * {
    direction: ltr;
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 28px;
    margin-bottom: 72px;
    direction: ltr;
  }
`;

export const ImageWrapper = styled.div`
  border-radius: var(--r-lg);
  overflow: hidden;
  border: 1px solid var(--line);
  background: var(--surface);
  aspect-ratio: 4 / 3;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const Content = styled.div``;

export const IndexLabel = styled.span`
  font-family: var(--font-montserrat), sans-serif;
  display: block;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--navy-600);
`;

export const Title = styled.h2`
  margin-top: 10px;
  font-family: var(--font-montserrat), var(--font-pretendard), sans-serif;
  font-size: 1.9rem;
  font-weight: 700;
  color: var(--ink);

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Subtitle = styled.p`
  margin-top: 6px;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--muted);
`;

export const Keywords = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-top: 18px;
`;

export const Keyword = styled.span`
  padding: 5px 11px;
  border-radius: var(--r-full);
  border: 1px solid var(--navy-100);
  background: var(--navy-50);
  color: var(--navy-700);
  font-size: 0.72rem;
  font-weight: 600;
  line-height: 1.4;
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid var(--line);
  margin: 22px 0;
`;

export const Description = styled.p`
  font-size: 0.94rem;
  line-height: 1.85;
  color: var(--body);
  text-wrap: pretty;

  & + & {
    margin-top: 14px;
  }
`;

export const ProjectsSection = styled.section`
  margin-top: 110px;
  padding-top: 64px;
  border-top: 1px solid var(--line);

  @media (max-width: 768px) {
    margin-top: 76px;
    padding-top: 48px;
  }
`;

export const SectionTitle = styled(BaseSectionTitle)`
  text-transform: uppercase;
  color: var(--ink);
  text-align: center;
`;

export const SectionLead = styled.p`
  max-width: 560px;
  margin: 14px auto 40px;
  font-size: 0.95rem;
  line-height: 1.75;
  color: var(--muted);
  text-align: center;
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;
