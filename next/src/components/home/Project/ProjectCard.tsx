"use client";

import * as S from "./ProjectCard.styles";
import type { Project } from "@/content/data";
import { ui } from "@/content/site";
import { useT } from "@/lib/i18n";

interface ProjectCardProps extends Project {
  /** 어두운 배경(홈) 위에 올라갈 때 */
  onDark?: boolean;
}

export default function ProjectCard({
  sponsor,
  title,
  period,
  type,
  onDark = false,
}: ProjectCardProps) {
  const t = useT();

  return (
    <S.Card $onDark={onDark}>
      <S.CardTitleArea>
        <S.CardTitle>{t(title)}</S.CardTitle>
        {type && (
          <S.TypeBadge $principal={type.ko === "개인과제"}>{t(type)}</S.TypeBadge>
        )}
      </S.CardTitleArea>

      <div>
        <S.CardDivider />
        <S.CardMeta>
          <S.MetaRow>
            <S.MetaBadge>{t(ui.period)}</S.MetaBadge>
            <S.MetaText>{period}</S.MetaText>
          </S.MetaRow>

          <S.MetaRow>
            <S.MetaBadge>{t(ui.support)}</S.MetaBadge>
            <S.MetaText>{t(sponsor)}</S.MetaText>
          </S.MetaRow>
        </S.CardMeta>
      </div>
    </S.Card>
  );
}
