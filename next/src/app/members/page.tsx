"use client";

import Header from "@/components/layout/Header";
import MemberCard, { type MemberData } from "@/components/people/Member/MemberCard";
import PeopleTabs from "@/components/people/PeopleTabs";
import members from "@/data/members.json";
import * as S from "./page.styles";
import {
  PageContainer,
  SectionCount,
  SectionHeader,
  SectionLabel,
} from "@/components/ui/Common.styles";
import { useT, type Localized } from "@/lib/i18n";

// 교수 프로필은 /members/professor 로 분리되어 있어 여기서는 제외한다.
const SECTIONS: { key: string; label: Localized }[] = [
  { key: "postdoc",       label: { ko: "박사후연구원",       en: "Post Doctor" } },
  { key: "phd",           label: { ko: "박사과정",           en: "Ph.D. Students" } },
  { key: "master",        label: { ko: "석사과정",           en: "M.S. Students" } },
  { key: "undergraduate", label: { ko: "학부연구생",         en: "Undergraduates" } },
];

export default function MembersPage() {
  const t = useT();

  return (
    <>
      <Header title="Members" eyebrow="People" />

      <PageContainer>
        <PeopleTabs />

        {SECTIONS.map((section) => {
          const items = (members as Record<string, MemberData[]>)[section.key];
          if (!items?.length) return null;

          return (
            <S.Section key={section.key}>
              <SectionHeader>
                <SectionLabel>{t(section.label)}</SectionLabel>
                <SectionCount>{items.length}</SectionCount>
              </SectionHeader>

              <S.Grid $single={items.length === 1}>
                {items.map((member) => (
                  <MemberCard key={member.name.en} member={member} />
                ))}
              </S.Grid>
            </S.Section>
          );
        })}
      </PageContainer>
    </>
  );
}
