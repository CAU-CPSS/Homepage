"use client";

import * as S from "./AlumniCard.styles";

export interface AlumniData {
  name: string;
  degree: string;
  year: number;
  major: string;
  school: string;
  status: string | null;
}

interface AlumniCardProps {
  alumni: AlumniData;
}

export default function AlumniCard({ alumni }: AlumniCardProps) {
  return (
    <S.Card>
      <S.InfoCol>
        <S.Name>{alumni.name}</S.Name>
        <S.Degree>{alumni.degree} · {alumni.year}</S.Degree>
        <S.Major>{alumni.major}, {alumni.school}</S.Major>

        {alumni.status && (
          <>
            <S.Status>{alumni.status}</S.Status>
          </>
        )}
      </S.InfoCol>
    </S.Card>
  );
}