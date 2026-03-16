import * as S from "./ProjectCard.styles";

export interface ProjectCardProps {
  title: string;
  period: string;
  sponsor: string;
  type: string | null;
}

export default function ProjectCard({
  title,
  period,
  sponsor,
  type,
}: ProjectCardProps) {
  return (
    <S.Card>
      <S.CardTitleArea>
        <S.CardTitle>{title}</S.CardTitle>
        {type && <S.TypeBadge $type={type}>{type}</S.TypeBadge>}
      </S.CardTitleArea>

      <S.CardDivider />

      <S.CardMeta>
        <S.MetaRow>
          <S.MetaBadge>Period</S.MetaBadge>
          <S.MetaText>{period}</S.MetaText>
        </S.MetaRow>

        <S.MetaRow>
          <S.MetaBadge>Sponsor</S.MetaBadge>
          <S.MetaText>{sponsor}</S.MetaText>
        </S.MetaRow>
      </S.CardMeta>
    </S.Card>
  );
}