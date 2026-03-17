import Header from "@/components/layout/Header";
import MemberCard from "@/components/people/Member/MemberCard";
import members from "@/data/members.json";
import * as S from "./page.styles";
import type { MemberData } from "@/components/people/Member/MemberCard";

const SECTIONS = [
  { key: "professor",      label: "Professor"                 },
  { key: "students",       label: "Students"                  },
  { key: "undergraduates", label: "Undergraduates           " },
  { key: "admins",         label: "Homepage & Server Admin"   },
] as const;

export default function MembersPage() {
  return (
    <>
      <Header title="Members" />
      <S.Container>
        {SECTIONS.map((section) => {
          const items = (members as Record<string, MemberData[]>)[section.key];
          if (!items?.length) return null;
          return (
            <S.Section key={section.key}>
              <S.SectionHeader>
                <S.SectionLabel>{section.label}</S.SectionLabel>
                <S.SectionCount>{items.length}</S.SectionCount>
              </S.SectionHeader>
              <S.Grid $single={items.length === 1}>
                {items.map((member) => (
                  <MemberCard key={member.name} member={member} />
                ))}
              </S.Grid>
            </S.Section>
          );
        })}
      </S.Container>
    </>
  );
}