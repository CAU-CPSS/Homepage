import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import * as S from "./HeroSection.styles";
import SplitText from "../SplitText";
import HeroBackground from "./HeroBackground";

const HeroSection = () => {
  return (
    <S.Wrapper>
      <HeroBackground />
      <S.Title>
        <SplitText text="CAU CPSS Lab" delay={55} duration={1.3} startDelay={100} />
      </S.Title>
      <S.Description>
        <SplitText text="중앙대학교 사이버물리시스템 보안 연구실" delay={28} duration={1.0} startDelay={500} />
      </S.Description>
      <S.Scroll>
        <MdKeyboardDoubleArrowDown />
      </S.Scroll>
    </S.Wrapper>
  );
};

export default HeroSection;