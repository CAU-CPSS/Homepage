"use client";

import * as S from "./MemberCard.styles";
import { useT, type Localized } from "@/lib/i18n";

export interface MemberData {
  name: Localized;
  degree: Localized;
  major: Localized;
  background?: Localized; // optional
  /** 학술 용어라 번역하지 않는다 — 한/영 모두 영문으로 노출 */
  interests: string[];
  photo: string | null;
}

interface MemberCardProps {
  member: MemberData;
}

export default function MemberCard({ member }: MemberCardProps) {
  const t = useT();
  const name = t(member.name);
  const major = t(member.major);
  // 아직 채워지지 않은 항목이 빈 태그로 보이지 않도록 걸러낸다
  const interests = member.interests.filter((interest) => interest.trim());

  return (
    <S.Card>
      <S.PhotoWrapper>
        {member.photo ? (
          <S.Photo src={`/images/members/${member.photo}`} alt={name} />
        ) : (
          <S.PhotoPlaceholder aria-hidden>{name.charAt(0)}</S.PhotoPlaceholder>
        )}
      </S.PhotoWrapper>

      <S.InfoCol>
        <S.Name>{name}</S.Name>
        <S.Degree>{t(member.degree)}</S.Degree>

        {major && <S.Major>{major}</S.Major>}
        {member.background && <S.Background>{t(member.background)}</S.Background>}

        {interests.length > 0 && (
          <S.InterestList>
            {interests.map((interest) => (
              <S.InterestTag key={interest}>{interest}</S.InterestTag>
            ))}
          </S.InterestList>
        )}
      </S.InfoCol>
    </S.Card>
  );
}
