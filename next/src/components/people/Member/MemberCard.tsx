"use client";

import * as S from "./MemberCard.styles";

export interface MemberData {
  name: string;
  degree: string;
  major: string;
  background?: string;  // optional (교수님만)
  interests: string[];
  photo: string | null;
}

interface MemberCardProps {
  member: MemberData;
}

export default function MemberCard({ member }: MemberCardProps) {
  return (
    <S.Card>
      <S.PhotoCol>
        <S.PhotoWrapper>
          {member.photo ? (
            <S.Photo
              src={`/images/members/${member.photo}`}
              alt={member.name}
            />
          ) : (
            <S.PhotoPlaceholder>
              {member.name.charAt(0)}
            </S.PhotoPlaceholder>
          )}
        </S.PhotoWrapper>
      </S.PhotoCol>

      <S.InfoCol>
        <S.Name>{member.name}</S.Name>
        <S.Degree>{member.degree}</S.Degree>

        <S.Major>{member.major}</S.Major>
        {member.background && (
          <S.Background>{member.background}</S.Background>  // ✅ 있을 때만 렌더
        )}

        <S.Row>
          <S.FieldBadge>Interests</S.FieldBadge>
        </S.Row>

        <S.InterestList>
          {member.interests.map((interest, i) => (
            <S.InterestTag key={i}>{interest}</S.InterestTag>
          ))}
        </S.InterestList>
      </S.InfoCol>
    </S.Card>
  );
}