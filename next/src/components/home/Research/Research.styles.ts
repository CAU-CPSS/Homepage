"use client";

import styled from "styled-components";
import Link from "next/link";

import { SectionTitle as BaseSectionTitle } from "@/components/ui/Common.styles";

export const Section = styled.section`
  position: relative;
  padding: 100px 40px;

  @media (max-width: 768px) {
    padding: 80px 25px;
  }
`;

export const SectionTitle = styled(BaseSectionTitle)`
  position: relative;
  z-index: 1;
  text-align: center;
  color: #ffffff;
  margin-bottom: 50px;
`;

export const SectionDescriptionUl = styled.ul`
  position: relative;
  z-index: 1;
  text-align: center;
  color: #ffffff;
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 880px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  padding-left: 20px;

  li {
    margin-bottom: 5px;
  }
`;

export const SectionDescriptionSpan = styled.p`
  position: relative;
  z-index: 1;
  text-align: center;
  color: #ffffff;
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
`;

export const CardGrid = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1160px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    max-width: 480px;
  }
`;

export const Card = styled(Link)<{ $image?: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 340px;
  overflow: hidden;
  cursor: pointer;
  text-decoration: none;
  background-image: linear-gradient(
      160deg,
      rgba(8, 16, 42, 0.4) 0%,
      rgba(4, 10, 28, 0.6) 100%
    ),
    url(${({ $image }) => $image || ""});
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    min-height: 250px;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
  gap: 10px;
  padding: 32px 20px 0;
  transition: transform 0.6s ease;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

export const CardLabel = styled.h4`
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.65);
  font-weight: 500;
  text-align: center;
`;

export const CardTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.2;
  letter-spacing: -0.01em;
  text-align: center;
`;

export const MoreLabel = styled.span`
  display: block;
  width: 100%;
  text-align: center;
  padding: 12px 0;
  color: rgba(255, 255, 255, 0.75);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  background: rgba(0, 0, 0, 0.35);
  transition: transform 0.6s ease;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;
