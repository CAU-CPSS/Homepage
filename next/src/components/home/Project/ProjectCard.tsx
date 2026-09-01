"use client";

import * as S from "./ProjectCard.styles";
import type { Project } from "@/content/data";
import { ui } from "@/content/site";
import { useT } from "@/lib/i18n";

export default function ProjectCard({ sponsor, title, period, type }: Project) {
  const t = useT();

  return (
    <S.Card>
      <S.CardTitleArea>
        {type && (
          <S.TypeBadge $principal={type.ko === "개인과제"}>{t(type)}</S.TypeBadge>
        )}
        <S.CardTitle>{t(title)}</S.CardTitle>
      </S.CardTitleArea>

      <div>
        <S.CardDivider />
        <S.CardMeta>
          <S.MetaBadge>{t(ui.period)}</S.MetaBadge>
          <S.MetaText>{period}</S.MetaText>

          <S.MetaBadge>{t(ui.support)}</S.MetaBadge>
          <S.MetaText>{t(sponsor)}</S.MetaText>
        </S.CardMeta>
      </div>
    </S.Card>
  );
}
