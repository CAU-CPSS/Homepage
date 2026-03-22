"use client";
import * as S from "./Footer.styles";

const Footer = () => {
  return (
    <S.FooterOuter>
      <S.FooterInner>
        <S.FooterGrid>
          <S.Column>
            <S.Title>CPSS Lab</S.Title>
          </S.Column>

          <S.Column>
            <S.Info>
              중앙대학교 사이버물리시스템 보안 연구실
              <br />
              TEL. (02) 820-5935
              <br />
              주소: 서울시 동작구 흑석로 84, 310관 1139호
            </S.Info>
          </S.Column>
        </S.FooterGrid>

        <S.Divider />

        <S.Copyright>
          © 2024-2026 CPSS Lab. All rights reserved. <br />
          Originally designed by{" "}
          <S.Link
            href="https://github.com/karu-rress"
            target="_blank"
            rel="noopener noreferrer"
          >
            karu-rress
          </S.Link>{" "}
          & esther,
          Redesigned by {" "}
          <S.Link
            href="https://github.com/xaerinoo"
            target="_blank"
            rel="noopener noreferrer"
          >
            xaerinoo
          </S.Link>.
        </S.Copyright>
      </S.FooterInner>
    </S.FooterOuter>
  )
}

export default Footer