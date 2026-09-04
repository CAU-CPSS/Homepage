"use client";

import * as S from "./Footer.styles";
import { site } from "@/content/site";
import { useT } from "@/lib/i18n";
import { REQUIRED_TAPS, tap, useTapCount } from "@/components/easter-egg/secretTap";

const Footer = () => {
  const t = useT();

  /* 워드마크는 이스터에그의 숨은 입구다. secretTap 주석 참고. */
  const taps = useTapCount();

  return (
    <S.FooterOuter>
      <S.FooterInner>
        <S.FooterGrid>
          <S.Brand>
            <S.Title onClick={tap} $armed={taps >= REQUIRED_TAPS - 2}>
              {site.shortName}
            </S.Title>
          </S.Brand>

          <S.ContactCol>
            <S.Info>
              {t(site.address)}
              <br />
              TEL. {site.tel}
            </S.Info>
          </S.ContactCol>
        </S.FooterGrid>

        <S.Divider />

        <S.Copyright>
          © 2026 CPSS Lab. All rights reserved.
          <br />
          Designed by{" "}
          <S.Link_
            href="https://github.com/xaerinoo"
            target="_blank"
            rel="noopener noreferrer"
          >
            xaerinoo
          </S.Link_>
          .
        </S.Copyright>
      </S.FooterInner>
    </S.FooterOuter>
  );
};

export default Footer;
