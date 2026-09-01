"use client";

import styled from "styled-components";

export const Top = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
  gap: 24px;
  margin-bottom: 56px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const MapBox = styled.div`
  border: 1px solid var(--line);
  border-radius: var(--r-lg);
  overflow: hidden;
  min-height: 320px;
  background: var(--surface);

  iframe {
    width: 100%;
    height: 100%;
    min-height: 320px;
    border: 0;
    display: block;
  }
`;

export const ContactBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 28px;
  border: 1px solid var(--line);
  border-radius: var(--r-lg);
  background: var(--surface);
`;

export const LabInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const LabName = styled.h2`
  font-family: var(--font-montserrat), var(--font-pretendard), sans-serif;
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--ink);
  letter-spacing: -0.02em;
`;

export const InfoLine = styled.p`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 0.88rem;
  line-height: 1.6;
  color: var(--body);

  svg {
    flex-shrink: 0;
    margin-top: 4px;
    color: var(--navy-600);
  }
`;

export const EmailBlock = styled.div`
  padding-top: 22px;
  border-top: 1px solid var(--line);
`;

export const EmailNotice = styled.p`
  font-size: 0.86rem;
  line-height: 1.65;
  color: var(--muted);
`;

export const EmailChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 14px;
`;

export const EmailChip = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 8px 14px;
  border-radius: var(--r-full);
  border: 1px solid var(--line);
  background: #ffffff;
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--body);
  text-decoration: none;
  transition: border-color 0.2s var(--ease), background 0.2s var(--ease),
    color 0.2s var(--ease);

  &:hover {
    border-color: var(--navy-100);
    background: var(--navy-50);
    color: var(--navy-700);
  }
`;

export const Sections = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 28px;
  border: 1px solid var(--line);
  border-radius: var(--r-lg);
  background: #ffffff;
  box-shadow: var(--shadow-sm);
`;

export const SectionTop = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 10px;
`;

export const SectionTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--ink);
  letter-spacing: -0.01em;
`;

export const Badge = styled.span`
  padding: 4px 10px;
  border-radius: var(--r-full);
  border: 1px solid var(--navy-100);
  background: var(--navy-50);
  color: var(--navy-700);
  font-family: var(--font-montserrat), var(--font-pretendard), sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  line-height: 1.4;
`;

export const Desc = styled.p`
  font-size: 0.88rem;
  line-height: 1.7;
  color: var(--muted);
  margin-bottom: 20px;
`;

export const InfoGrid = styled.dl`
  display: grid;
  grid-template-columns: 84px minmax(0, 1fr);
  gap: 12px 16px;
  align-items: baseline;
  padding-top: 20px;
  border-top: 1px solid var(--line);
`;

export const InfoLabel = styled.dt`
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--subtle);
  letter-spacing: 0.02em;
`;

export const InfoValue = styled.dd`
  font-size: 0.88rem;
  line-height: 1.65;
  color: var(--body);
`;

export const Footnote = styled.p`
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px dashed var(--line);
  font-size: 0.8rem;
  line-height: 1.65;
  color: var(--subtle);
`;

export const DownloadLink = styled.a`
  color: var(--navy-700);
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 2px;

  &:hover {
    color: var(--navy-600);
  }
`;

export const UpdateNote = styled.p`
  margin-top: 36px;
  text-align: right;
  font-size: 0.78rem;
  color: var(--subtle);
`;
