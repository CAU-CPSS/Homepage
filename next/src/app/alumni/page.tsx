"use client";

import Header from "@/components/layout/Header";
import AlumniCard, { type AlumniData } from "@/components/people/Alumni/AlumniCard";
import PeopleTabs from "@/components/people/PeopleTabs";
import alumni from "@/data/alumni.json";
import * as S from "./page.styles";
import {
  PageContainer,
  SectionCount,
  SectionHeader,
  SectionLabel,
} from "@/components/ui/Common.styles";
import { useT, type Localized } from "@/lib/i18n";

const SECTIONS: { key: string; label: Localized }[] = [
  { key: "graduates",      label: { ko: "대학원 졸업생", en: "Graduate Alumni" } },
  { key: "undergraduates", label: { ko: "학부 졸업생",   en: "Undergraduate Alumni" } },
];

export default function AlumniPage() {
  const t = useT();

  return (
    <>
      <Header title="Alumni" eyebrow="People" />

      <PageContainer>
        <PeopleTabs />

        {SECTIONS.map((section) => {
          const items = (alumni as Record<string, AlumniData[]>)[section.key];
          if (!items?.length) return null;

          return (
            <S.Section key={section.key}>
              <SectionHeader>
                <SectionLabel>{t(section.label)}</SectionLabel>
                <SectionCount>{items.length}</SectionCount>
              </SectionHeader>

              <S.Grid>
                {items.map((a) => (
                  <AlumniCard key={`${a.name.en}-${a.year}`} alumni={a} />
                ))}
              </S.Grid>
            </S.Section>
          );
        })}
      </PageContainer>
    </>
  );
}
