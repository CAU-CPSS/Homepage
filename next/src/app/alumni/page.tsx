import Header from "@/components/layout/Header";
import AlumniCard from "@/components/people/Alumni/AlumniCard";
import alumni from "@/data/alumni.json";
import * as S from "./page.styles";
import type { AlumniData } from "@/components/people/Alumni/AlumniCard";
import { PageContainer, SectionCount, SectionHeader, SectionLabel } from "@/components/ui/Common.styles";

const SECTIONS = [
  { key: "graduates",    label: "Graduate Alumni"     },
  { key: "undergraduates", label: "Undergraduate Alumni" },
] as const;

export default function AlumniPage() {
  return (
    <>
      <Header title="Alumni" />
      <PageContainer>
        {SECTIONS.map((section) => {
          const items = (alumni as Record<string, AlumniData[]>)[section.key];
          if (!items?.length) return null;
          return (
            <S.Section key={section.key}>
              <SectionHeader>
                <SectionLabel>{section.label}</SectionLabel>
                <SectionCount>{items.length}</SectionCount>
              </SectionHeader>
              <S.Grid>
                {items.map((a) => (
                  <AlumniCard key={`${a.name}-${a.year}`} alumni={a} />
                ))}
              </S.Grid>
            </S.Section>
          );
        })}
      </PageContainer>
    </>
  );
}