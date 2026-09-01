"use client";

import styled from "styled-components";

export const Profile = styled.section`
  display: grid;
  grid-template-columns: 220px minmax(0, 1fr);
  gap: 40px;
  align-items: start;
  padding-bottom: 44px;
  border-bottom: 1px solid var(--line);
  margin-bottom: 56px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`;

export const PhotoWrapper = styled.div`
  width: 100%;
  max-width: 220px;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: var(--r-lg);
  background: var(--surface);
`;

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  display: block;
`;

export const Name = styled.h2`
  font-size: 1.9rem;
  font-weight: 700;
  color: var(--ink);
  letter-spacing: -0.02em;
`;

export const NameSub = styled.span`
  margin-left: 10px;
  font-family: var(--font-pretendard), sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: var(--subtle);
`;

export const Position = styled.p`
  margin-top: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--navy-700);
`;

export const Affiliation = styled.p`
  margin-top: 4px;
  font-size: 0.9rem;
  line-height: 1.65;
  color: var(--muted);
`;

export const Intro = styled.p`
  margin-top: 20px;
  font-size: 0.95rem;
  line-height: 1.8;
  color: var(--body);
  text-wrap: pretty;
`;

export const ContactRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 22px;
`;

export const Chip = styled.a`
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
  transition: border-color 0.2s var(--ease), color 0.2s var(--ease),
    background 0.2s var(--ease);

  &:hover {
    border-color: var(--navy-100);
    background: var(--navy-50);
    color: var(--navy-700);
  }
`;

export const InterestList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-top: 16px;
`;

export const InterestTag = styled.span`
  padding: 5px 11px;
  border-radius: var(--r-full);
  border: 1px solid var(--navy-100);
  background: var(--navy-50);
  color: var(--navy-700);
  font-size: 0.74rem;
  font-weight: 600;
  line-height: 1.4;
`;

/* ---------------- 약력 섹션 ---------------- */

export const EntryList = styled.ul<{ $grid?: boolean }>`
  list-style: none;
  display: grid;
  gap: ${({ $grid }) => ($grid ? "14px 28px" : "22px")};
  grid-template-columns: ${({ $grid }) => ($grid ? "repeat(2, minmax(0, 1fr))" : "1fr")};

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const Entry = styled.li<{ $grid?: boolean }>`
  display: grid;
  grid-template-columns: ${({ $grid }) => ($grid ? "1fr" : "108px minmax(0, 1fr)")};
  gap: ${({ $grid }) => ($grid ? "2px" : "0 24px")};
  align-items: baseline;

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
    gap: 4px;
  }
`;

export const Period = styled.span`
  font-family: var(--font-montserrat), sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--navy-600);
  white-space: nowrap;
`;

export const EntryBody = styled.div``;

export const EntryText = styled.p`
  font-size: 0.94rem;
  font-weight: 500;
  line-height: 1.65;
  color: var(--ink);
`;

export const EntryNote = styled.p`
  margin-top: 3px;
  font-size: 0.85rem;
  line-height: 1.6;
  color: var(--muted);
`;

export const Items = styled.ul`
  margin-top: 8px;
  padding-left: 2px;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ItemLine = styled.li`
  position: relative;
  padding-left: 14px;
  font-size: 0.86rem;
  line-height: 1.65;
  color: var(--body);

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.65em;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--line-strong);
  }
`;
