"use client";

import { MdOutlineEmail, MdOutlineLocationOn, MdOutlinePhone } from "react-icons/md";

import Header from "@/components/layout/Header";
import * as S from "./page.styles";
import { PageContainer } from "@/components/ui/Common.styles";
import { site } from "@/content/site";
import { useT } from "@/lib/i18n";

const COPY = {
  headerDesc: {
    ko: "연구실 위치와 지원 문의 안내입니다.",
    en: "How to find us, and how to apply.",
  },
  emailNotice: {
    ko: "석·박사과정 및 학부연구생 지원 문의는 아래 이메일로 부탁드립니다.",
    en: "For graduate and undergraduate research positions, please reach out by email.",
  },

  gradTitle: { ko: "대학원생 모집", en: "Graduate Students" },
  gradBadge: { ko: "모집 중", en: "Now recruiting" },
  gradDesc: {
    ko: "중앙대학교 사이버물리시스템 보안 연구실에서 연구자로 성장할 대학원생을 모집합니다.",
    en: "We are looking for graduate students to grow as researchers at the CPSS Lab, Chung-Ang University.",
  },
  department: { ko: "학과", en: "Program" },
  departmentValue: {
    ko: "일반대학원 융합보안학과",
    en: "Graduate School of Security Convergence",
  },
  mode: { ko: "유형", en: "Type" },
  modeValue: { ko: "Full-Time (전일제)", en: "Full-time" },
  degree: { ko: "학위", en: "Degrees" },
  benefit: { ko: "혜택", en: "Support" },
  gradBenefitValue: {
    ko: "연구 장학금, 연구 장비 지원, 해외 학술대회 발표 지원",
    en: "Research scholarships, equipment support, and funding for presenting at international conferences",
  },
  gradFootnote: {
    ko: "중앙대학교 일반대학원 융합보안학과는 학과 간 협동과정으로 운영되어, 학·석사연계과정으로 지원할 수 없습니다.",
    en: "The Graduate School of Security Convergence is run as an interdepartmental program, so the combined bachelor's–master's track is not available.",
  },

  ugTitle: { ko: "학부연구생 모집", en: "Undergraduate Researchers" },
  ugBadge: { ko: "2026-1학기 모집 예정", en: "Opening for Spring 2026" },
  ugDesc: {
    ko: "중앙대학교 사이버물리시스템 보안 연구실에서 연구활동을 경험할 학부생을 모집합니다.",
    en: "We welcome undergraduates who want hands-on research experience at the CPSS Lab.",
  },
  eligibility: { ko: "지원 자격", en: "Eligibility" },
  eligibilityValue: {
    ko: "소속 캠퍼스 및 주전공 제한 없음",
    en: "Open to all campuses and majors",
  },
  certificate: { ko: "경력증명서 발급 가능 (", en: "Certificate of experience available (" },
  certificateDownload: { ko: "해당 파일 다운로드", en: "download the form" },
  certificateAfter: {
    ko: " 및 작성 후 메일 문의)",
    en: ", fill it in, and email us)",
  },

  lastUpdate: {
    ko: "최종 수정일: 2026년 1월 31일",
    en: "Last update: Jan. 31st, 2026",
  },
};

const DEGREE_VALUE = {
  ko: (
    <>
      보안공학석사 / 보안경영석사 (석사과정)
      <br />
      보안공학박사 / 보안경영박사 (박사과정)
    </>
  ),
  en: (
    <>
      M.S. in Security Engineering / Security Management
      <br />
      Ph.D. in Security Engineering / Security Management
    </>
  ),
};

export default function ContactPage() {
  const t = useT();

  return (
    <>
      <Header title="Contact" description={t(COPY.headerDesc)} />

      <PageContainer>
        <S.Top>
          <S.MapBox>
            <iframe
              title="CPSS Lab location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3368.926266213087!2d126.95359214246679!3d37.5036051109099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca19bfd1c0bb1%3A0xee902db348af57fd!2z7KSR7JWZ64yA7ZWZ6rWQIDEwMOyjvOuFhOq4sOuFkOq0gCgzMTDqtIAp!5e0!3m2!1sko!2skr!4v1774181259955!5m2!1sko!2skr"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </S.MapBox>

          <S.ContactBox>
            <S.LabInfo>
              <S.LabName>CAU CPSS Lab</S.LabName>
              <S.InfoLine>
                <MdOutlineLocationOn size={16} />
                {t(site.address)}
              </S.InfoLine>
              <S.InfoLine>
                <MdOutlinePhone size={16} />
                {site.tel}
              </S.InfoLine>
            </S.LabInfo>

            <S.EmailBlock>
              <S.EmailNotice>{t(COPY.emailNotice)}</S.EmailNotice>
              <S.EmailChips>
                {site.emails.map((email) => (
                  <S.EmailChip key={email} href={`mailto:${email}`}>
                    <MdOutlineEmail size={15} />
                    {email}
                  </S.EmailChip>
                ))}
              </S.EmailChips>
            </S.EmailBlock>
          </S.ContactBox>
        </S.Top>

        <S.Sections>
          <S.Section>
            <S.SectionTop>
              <S.SectionTitle>{t(COPY.gradTitle)}</S.SectionTitle>
              <S.Badge>{t(COPY.gradBadge)}</S.Badge>
            </S.SectionTop>
            <S.Desc>{t(COPY.gradDesc)}</S.Desc>

            <S.InfoGrid>
              <S.InfoLabel>{t(COPY.department)}</S.InfoLabel>
              <S.InfoValue>{t(COPY.departmentValue)}</S.InfoValue>

              <S.InfoLabel>{t(COPY.mode)}</S.InfoLabel>
              <S.InfoValue>{t(COPY.modeValue)}</S.InfoValue>

              <S.InfoLabel>{t(COPY.degree)}</S.InfoLabel>
              <S.InfoValue>{t(DEGREE_VALUE)}</S.InfoValue>

              <S.InfoLabel>{t(COPY.benefit)}</S.InfoLabel>
              <S.InfoValue>{t(COPY.gradBenefitValue)}</S.InfoValue>
            </S.InfoGrid>

            <S.Footnote>{t(COPY.gradFootnote)}</S.Footnote>
          </S.Section>

          <S.Section>
            <S.SectionTop>
              <S.SectionTitle>{t(COPY.ugTitle)}</S.SectionTitle>
              <S.Badge>{t(COPY.ugBadge)}</S.Badge>
            </S.SectionTop>
            <S.Desc>{t(COPY.ugDesc)}</S.Desc>

            <S.InfoGrid>
              <S.InfoLabel>{t(COPY.eligibility)}</S.InfoLabel>
              <S.InfoValue>{t(COPY.eligibilityValue)}</S.InfoValue>

              <S.InfoLabel>{t(COPY.benefit)}</S.InfoLabel>
              <S.InfoValue>
                {t(COPY.certificate)}
                <S.DownloadLink href="/files/경력증명서.hwp" download>
                  {t(COPY.certificateDownload)}
                </S.DownloadLink>
                {t(COPY.certificateAfter)}
              </S.InfoValue>
            </S.InfoGrid>
          </S.Section>
        </S.Sections>

        <S.UpdateNote>{t(COPY.lastUpdate)}</S.UpdateNote>
      </PageContainer>
    </>
  );
}
