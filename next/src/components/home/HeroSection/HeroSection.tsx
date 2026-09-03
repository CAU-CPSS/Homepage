"use client";

import { MdKeyboardDoubleArrowDown } from "react-icons/md";

import * as S from "./HeroSection.styles";
import SplitText from "../../ui/SplitText";
import HeroBackground from "./HeroBackground";
import { site } from "@/content/site";
import { languageSwitchedByUser, useLanguage, useT } from "@/lib/i18n";

const HeroSection = () => {
  const t = useT();
  const { lang } = useLanguage();

  /*
    글자를 쪼개 순차 등장시키므로, 언어가 바뀌면 앞부분은 이미 나타난 span 이
    그대로 재사용되고 뒤에 늘어난 글자만 뒤늦게 흐르는 것처럼 보인다.
    그래서 사용자가 직접 토글한 뒤에는 애니메이션 없이 한 번에 보여준다.
    (첫 로드는 저장된 언어로 맞추는 과정이라 애니메이션을 그대로 둔다)
  */
  const animate = !languageSwitchedByUser();

  return (
    <S.Wrapper>
      <HeroBackground />

      <S.Content>
        <S.Title>
          <SplitText text="CAU CPSS Lab" delay={55} duration={1.3} startDelay={100} />
        </S.Title>

        <S.Description>
          <SplitText
            key={lang}
            text={t(site.labName)}
            delay={26}
            duration={1.0}
            startDelay={500}
            animate={animate}
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
