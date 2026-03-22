import styled from "styled-components";

export const Top = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 50px;
  border: 1px solid #e5e7eb;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const MapBox = styled.div`
  min-height: 380px;

  iframe {
    width: 100%;
    height: 100%;
    min-height: 380px;
    display: block;
    border: none;
  }

  @media (max-width: 768px) {
    min-height: 260px;
    iframe { min-height: 260px; }
  }
`;

export const ContactBox = styled.div`
  padding: 0 40px;
  border-left: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    border-left: none;
    border-top: 1px solid #e5e7eb;
    padding: 0 24px;
  }
`;

export const LabInfo = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 6px;

  @media (max-width: 768px) {
    padding: 30px 0;
  }
`;

export const LabName = styled.h1`
  font-size: 1.4rem;
  color: #111827;
  margin-bottom: 12px;
`;

export const InfoLine = styled.p`
  color: #4b5563;
  line-height: 1.4;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: attr(data-icon);
    flex-shrink: 0;
  }
`;

export const EmailBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top: 1px solid #f3f4f6;

  @media (max-width: 768px) {
    padding: 30px 0;
  }
`;

export const EmailNotice = styled.p`
  color: #4b5563;
  line-height: 1.7;
  margin-bottom: 14px;
`;

export const EmailChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const EmailChip = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border: 1px solid #1a2a6c;
  border-radius: 50px;
  font-size: 0.9rem;
  color: #1a2a6c;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: #1a2a6c;
    color: #fff;
  }
`;

export const Sections = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Section = styled.section`
  padding: 50px 0;
  border-top: 1px solid #e5e7eb;
`;

export const SectionTop = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  flex-wrap: wrap;
`;

export const SectionTitle = styled.h2`
  font-size: 1.4rem;
  color: #111827;
`;

export const Badge = styled.p`
  background-color: #1a2a6c;
  color: white;
  font-size: 11px;
  padding: 4px 6px;
  border-radius: 3px;
`;

export const Desc = styled.p`
  font-weight: 450;
  color: #111827;
  margin-bottom: 20px;
`;

export const InfoGrid = styled.dl`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #f3f4f6;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 0 24px;
  padding: 11px 0;
  border-bottom: 1px solid #f3f4f6;
  align-items: baseline;

  @media (max-width: 520px) {
    grid-template-columns: 80px 1fr;
    gap: 0 14px;
  }
`;

export const InfoLabel = styled.dt`
  color: #9ca3af;
  padding-top: 1px;
  line-height: 1.75;
`;

export const InfoValue = styled.dd`
  color: #374151;
  line-height: 1.75;
`;

export const DownloadLink = styled.a`
  color: #007bff;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover { opacity: 0.5; }
`;

export const Footnote = styled.p`
  color: #9ca3af;
  margin-top: 20px;
  padding-left: 10px;
  border-left: 2px solid #e5e7eb;
`;

export const UpdateNote = styled.p`
  text-align: right;
  font-size: 0.75rem;
  color: #9ca3af;
`;