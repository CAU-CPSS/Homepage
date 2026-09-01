"use client";

import { MdOutlineEmail } from "react-icons/md";
import { FiExternalLink } from "react-icons/fi";

import Header from "@/components/layout/Header";
import PeopleTabs from "@/components/people/PeopleTabs";
import {
  PageContainer,
  Section,
  SectionHeader,
  SectionLabel,
} from "@/components/ui/Common.styles";
import * as S from "./page.styles";
import { professor, type ProfileEntry } from "@/content/data";
import { useT, type Localized } from "@/lib/i18n";

/** period 는 한/영이 같으면 그냥 문자열로 두므로 두 형태를 모두 받는다. */
function usePeriodText() {
  const t = useT();
  return (period?: string | Localized) =>
    typeof period === "string" ? period : period ? t(period) : null;
}

export default function ProfessorPage() {
  const t = useT();
  const periodText = usePeriodText();

  const renderEntry = (entry: ProfileEntry, index: number, grid: boolean) => {
    const period = periodText(entry.period);

    return (
      <S.Entry key={index} $grid={grid}>
        {period ? <S.Period>{period}</S.Period> : !grid && <span />}

        <S.EntryBody>
          <S.EntryText>{t(entry.text)}</S.EntryText>
          {entry.note && <S.EntryNote>{t(entry.note)}</S.EntryNote>}

          {entry.items && (
            <S.Items>
              {t(entry.items).map((item) => (
                <S.ItemLine key={item}>{item}</S.ItemLine>
              ))}
            </S.Items>
          )}
        </S.EntryBody>
      </S.Entry>
    );
  };

  return (
    <>
      <Header title="Professor" eyebrow="People" />

      <PageContainer>
        <PeopleTabs />

        <S.Profile>
          <S.PhotoWrapper>
            <S.Photo
              src={`/images/members/${professor.photo}`}
              alt={t(professor.name)}
            />
          </S.PhotoWrapper>

          <div>
            <S.Name>
              {t(professor.name)}
              <S.NameSub>{t(professor.nameSub)}</S.NameSub>
            </S.Name>
            <S.Position>{t(professor.position)}</S.Position>
            <S.Affiliation>{t(professor.affiliation)}</S.Affiliation>

            <S.Intro>{t(professor.intro)}</S.Intro>

            <S.ContactRow>
              {professor.emails.map((email) => (
                <S.Chip key={email} href={`mailto:${email}`}>
                  <MdOutlineEmail size={15} />
                  {email}
                </S.Chip>
              ))}
              {professor.links.map((link) => (
                <S.Chip
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiExternalLink size={14} />
                  {link.label}
                </S.Chip>
              ))}
            </S.ContactRow>

            <S.InterestList>
              {professor.interests.map((interest) => (
                <S.InterestTag key={interest}>{interest}</S.InterestTag>
              ))}
            </S.InterestList>
          </div>
        </S.Profile>

        {professor.sections.map((section) => {
          const grid = section.layout === "grid";

          return (
            <Section key={section.id} id={section.id}>
              <SectionHeader>
                <SectionLabel>{t(section.label)}</SectionLabel>
              </SectionHeader>

              <S.EntryList $grid={grid}>
                {section.entries.map((entry, i) => renderEntry(entry, i, grid))}
              </S.EntryList>
            </Section>
          );
        })}
      </PageContainer>
    </>
  );
}
