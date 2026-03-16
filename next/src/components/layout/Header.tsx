import * as S from "./Header.styles"

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Subtitle>Cyber-Physical System Security Lab</S.Subtitle>
    </S.Wrapper>
  );
}