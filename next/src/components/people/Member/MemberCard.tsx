"use client";

import * as S from "./MemberCard.styles";
import { term } from "@/content/vocab";
import { ui } from "@/content/site";
import { useT } from "@/lib/i18n";

export interface MemberData {
  name: string;
  degree: string;
  major: string;
  background?: string; // optional
  interests: string[];
  photo: string | null;
}

interface MemberCardProps {
  member: MemberData;
}

export default function MemberCard({ member }: MemberCardProps) {
  const t = useT();
  // 아직 채워지지 않은 항목이 빈 태그로 보이지 않도록 걸러낸다
  const interests = member.interests.filter((interest) => interest.trim());

  return (
    <S.Card>
      <S.PhotoWrapper>
        {member.photo ? (
          <S.Photo src={`/images/members/${member.photo}`} alt={member.name} />
        ) : (
          <S.PhotoPlaceholder aria-hidden>{member.name.charAt(0)}</S.PhotoPlaceholder>
        )}
      </S.PhotoWrapper>

      <S.InfoCol>
        <S.Name>{member.name}</S.Name>
        <S.Degree>{t(term(member.degree))}</S.Degree>

        {member.major && <S.Major>{t(term(member.major))}</S.Major>}
        {member.background && <S.Background>{t(term(member.background))}</S.Background>}

        {interests.length > 0 && (
          <>
            <S.InterestLabel>{t(ui.interests)}</S.InterestLabel>
            <S.InterestList>
              {interests.map((interest) => (
                <S.InterestTag key={interest}>{interest}</S.InterestTag>
              ))}
            </S.InterestList>
          </>
        )}
      </S.InfoCol>
    </S.Card>
  );
}
