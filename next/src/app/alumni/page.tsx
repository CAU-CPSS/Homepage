import Header from "@/components/layout/Header";
import AlumniCard from "@/components/people/Alumni/AlumniCard";
import alumni from "@/data/alumni.json";
import * as S from "./page.styles";
import type { AlumniData } from "@/components/people/Alumni/AlumniCard";

const SECTIONS = [
  { key: "graduates",    label: "Graduate Alumni"     },
  { key: "undergraduates", label: "Undergraduate Alumni" },
] as const;

export default function AlumniPage() {
  return (
    <>
      <Header title="Alumni" />
      <S.Container>
        {SECTIONS.map((section) => {
          const items = (alumni as Record<string, AlumniData[]>)[section.key];
          if (!items?.length) return null;
          return (
            <S.Section key={section.key}>
              <S.SectionHeader>
                <S.SectionLabel>{section.label}</S.SectionLabel>
                <S.SectionCount>{items.length}</S.SectionCount>
              </S.SectionHeader>
              <S.Grid>
                {items.map((a) => (
                  <AlumniCard key={`${a.name}-${a.year}`} alumni={a} />
                ))}
              </S.Grid>
            </S.Section>
          );
        })}
      </S.Container>
    </>
  );
}