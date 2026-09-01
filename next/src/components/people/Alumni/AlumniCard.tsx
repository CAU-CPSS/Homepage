"use client";

import * as S from "./AlumniCard.styles";
import { term } from "@/content/vocab";
import { useT, type Localized } from "@/lib/i18n";

export interface AlumniData {
  name: Localized;
  degree: string;
  year: number;
  major: string;
  school: string;
  status: Localized | null;
}

interface AlumniCardProps {
  alumni: AlumniData;
}

export default function AlumniCard({ alumni }: AlumniCardProps) {
  const t = useT();

  return (
    <S.Card>
      <S.TopRow>
        <S.Name>{t(alumni.name)}</S.Name>
        <S.Year>{alumni.year}</S.Year>
      </S.TopRow>

      <S.Degree>{t(term(alumni.degree))}</S.Degree>
      <S.Major>
        {t(term(alumni.major))}, {t(term(alumni.school))}
      </S.Major>

      {alumni.status && <S.Status>{t(alumni.status)}</S.Status>}
    </S.Card>
  );
}
