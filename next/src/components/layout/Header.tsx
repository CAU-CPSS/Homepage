import SplitText from "../ui/SplitText";
import * as S from "./Header.styles"

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <S.Wrapper>
      <S.Title>
        <SplitText text={title} startDelay={200} delay={50} />
      </S.Title>
      <S.Subtitle>
        <SplitText text="Cyber-Physical System Security Lab" startDelay={400} duration={0.5} delay={20} />
        </S.Subtitle>
    </S.Wrapper>
  );
}