"use client";

import * as S from "./HeroSection.styles";

const HeroSection = () => {
  return (
    <S.Wrapper>
      <S.Inner>
        <S.Title>CAU CPSS Lab</S.Title>

        <S.SubTitle>
          Cyber-Physical System <br />
          Security Lab at CAU
        </S.SubTitle>

        <S.KoreanTitle>
          중앙대학교 사이버물리시스템 보안 연구실
        </S.KoreanTitle>

        <S.List>
          <li>
            AI와 디바이스의 융합을 시스템 관점에서 접근하여 효율적인 응용 방안을
            연구합니다.
          </li>
          <li>
            학문적인 연구를 넘어 실제 산업에 적용할 수 있는 시스템을 구현합니다.
          </li>
        </S.List>

        <S.Description>
          주요 연구분야: OS, On-device, Embedded, Real-time system, Security
        </S.Description>
      </S.Inner>
    </S.Wrapper>
  );
};

export default HeroSection;