import { RiScrollToBottomLine } from "react-icons/ri";
import InteractiveBackground from "../ui/InteractiveBackground";
import * as S from "./HeroSection.styles";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const HeroSection = () => {
  return (
    <S.Wrapper>
      <InteractiveBackground />
      <S.Title>
        <S.Line>Chung-Ang University</S.Line>

        <S.LineDesktop>
          Cyber-Physical System Security Lab
        </S.LineDesktop>

        <S.LineMobile>Cyber-Physical System</S.LineMobile>
        <S.LineMobile>Security Lab</S.LineMobile>
      </S.Title>
      <S.Description>
        중앙대학교 사이버물리시스템 보안 연구실
      </S.Description>
      <S.Scroll>
        <MdKeyboardDoubleArrowDown />
      </S.Scroll>
    </S.Wrapper>
  );
};

export default HeroSection;