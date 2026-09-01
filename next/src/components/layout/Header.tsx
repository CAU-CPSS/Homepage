"use client";

import SplitText from "../ui/SplitText";
import * as S from "./Header.styles";

interface HeaderProps {
  /** 페이지 이름 — 메뉴와 동일하게 항상 영어를 쓴다. */
  title: string;
  /** 제목 위 작은 라벨 (예: People) */
  eyebrow?: string;
  /** 제목 아래 설명 — 이미 현재 언어로 변환된 문자열을 받는다. */
  description?: string;
}

export default function Header({ title, eyebrow, description }: HeaderProps) {
  return (
    <S.Wrapper>
      <S.Content>
        {eyebrow && <S.Eyebrow>{eyebrow}</S.Eyebrow>}

        <S.Title>
          <SplitText text={title} startDelay={150} delay={45} />
        </S.Title>

        {description && <S.Description>{description}</S.Description>}
      </S.Content>
    </S.Wrapper>
  );
}
