"use client";

import * as S from "./Footer.styles";
import { site } from "@/content/site";
import { useT } from "@/lib/i18n";

const LABELS = {
  contact: { ko: "연락처", en: "Contact" },
};

const Footer = () => {
  const t = useT();

  return (
    <S.FooterOuter>
      <S.FooterInner>
        <S.FooterGrid>
          <S.Brand>
            <S.Title>{site.shortName}</S.Title>
          </S.Brand>

          <S.ContactCol>
            <S.ColTitle>{t(LABELS.contact)}</S.ColTitle>
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
