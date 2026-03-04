"use client";

import * as S from "./Header.styles";
import Nav from "./Nav";

const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.Container>
        <Nav />
      </S.Container>
    </S.HeaderWrapper>
  )
}

export default Header