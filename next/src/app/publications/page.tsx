"use client";

import Header from "@/components/layout/Header";
import publications from "@/data/publications.json";
import * as S from "./page.styles";
import {
  PageContainer,
  SectionCount,
  SectionHeader,
  SectionLabel,
} from "@/components/ui/Common.styles";
import { useT, type Localized } from "@/lib/i18n";

interface Publication {
  people: string;
  title: string;
  details: string;
}

const SECTIONS: { key: string; label: Localized }[] = [
  {
    key: "international",
    label: { ko: "국제 학술지", en: "International Journals" },
  },
  {
    key: "conferences",
    label: {
      ko: "국제 학술대회 (Peer-Reviewed)",
      en: "Peer-Reviewed International Conferences",
    },
  },
  { key: "domestic", label: { ko: "국내 학술지", en: "Domestic Journals" } },
  { key: "others", label: { ko: "그 외", en: "Others" } },
  {
    key: "domesticOthers",
    label: { ko: "기타 국내 업적", en: "Other Domestic Publications" },
  },
];

const COPY = {
  headerDesc: {
    ko: "연구실에서 발표한 논문 목록입니다.",
    en: "Papers published by the lab.",
  },
};

export default function PublicationsPage() {
  const t = useT();

  return (
    <>
      <Header title="Publications" description={t(COPY.headerDesc)} />

      <PageContainer>
        {SECTIONS.map((section) => {
          const items = (publications as Record<string, Publication[]>)[section.key];
          if (!items?.length) return null;

          return (
            <S.Section key={section.key}>
              <SectionHeader>
                <SectionLabel>{t(section.label)}</SectionLabel>
                <SectionCount>{items.length}</SectionCount>
              </SectionHeader>

              <S.List>
                {items.map((pub, i) => (
                  <S.Item key={`${section.key}-${i}`}>
                    <S.Body>
                      <S.Title>{pub.title}</S.Title>
                      <S.People>{pub.people}</S.People>
                      <S.Details>{pub.details}</S.Details>
                    </S.Body>
                  </S.Item>
                ))}
              </S.List>
            </S.Section>
          );
        })}
      </PageContainer>
    </>
  );
}
