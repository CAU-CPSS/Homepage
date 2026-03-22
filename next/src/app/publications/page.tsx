import Header from "@/components/layout/Header";
import publications from "@/data/publications.json";
import * as S from "./page.styles";
import { PageContainer, SectionCount, SectionHeader, SectionLabel } from "@/components/ui/Common.styles";

interface Publication {
  code: string;
  people: string;
  title: string;
  details: string;
}

const SECTIONS = [
  { key: "international", label: "International Journals" },
  { key: "conferences",   label: "Peer-Reviewed International Conferences"     },
  { key: "others",        label: "Others"                },
] as const;

export default function PublicationsPage() {
  return (
    <>
      <Header title="Publications" />
      <PageContainer>
        {SECTIONS.map((section) => {
          const items = (publications as Record<string, Publication[]>)[section.key];
          return (
            <S.Section key={section.key}>
              <SectionHeader>
                <SectionLabel>{section.label}</SectionLabel>
                <SectionCount>{items.length}</SectionCount>
              </SectionHeader>

              <S.List>
                {items.map((pub) => (
                  <S.Item key={pub.code}>
                    <S.Code>{pub.code}</S.Code>
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