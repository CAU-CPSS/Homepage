"use client";

import { MdKeyboardDoubleArrowDown } from "react-icons/md";

import * as S from "./HeroSection.styles";
import SplitText from "../../ui/SplitText";
import HeroBackground from "./HeroBackground";
import { site } from "@/content/site";
import { useT } from "@/lib/i18n";

const HeroSection = () => {
  const t = useT();

  return (
    <S.Wrapper>
      <HeroBackground />

      <S.Content>
        <S.Title>
          <SplitText text="CAU CPSS Lab" delay={55} duration={1.3} startDelay={100} />
        </S.Title>

        <S.Description>
          <SplitText
            text={t(site.labName)}
            delay={26}
            duration={1.0}
            startDelay={500}
          />
        </S.Description>
      </S.Content>

      <S.Scroll aria-hidden>
        <MdKeyboardDoubleArrowDown />
      </S.Scroll>
    </S.Wrapper>
  );
};

export default HeroSection;
