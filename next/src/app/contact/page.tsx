import Header from "@/components/layout/Header";
import * as S from "./page.styles";
import { MdOutlineEmail, MdOutlineLocationOn, MdOutlinePhone } from "react-icons/md";
import { PageContainer } from "@/components/ui/Common.styles";

export default function ContactPage() {
  return (
    <>
      <Header title="Contact" />
      <PageContainer>

        <S.Top>
          <S.MapBox>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3368.926266213087!2d126.95359214246679!3d37.5036051109099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca19bfd1c0bb1%3A0xee902db348af57fd!2z7KSR7JWZ64yA7ZWZ6rWQIDEwMOyjvOuFhOq4sOuFkOq0gCgzMTDqtIAp!5e0!3m2!1sko!2skr!4v1774181259955!5m2!1sko!2skr"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </S.MapBox>

          <S.ContactBox>
            <S.LabInfo>
              <S.LabName>CAU CPSS Lab</S.LabName>
              <S.InfoLine><MdOutlineLocationOn size={15} />서울시 동작구 흑석로 84, 310관 1139호</S.InfoLine>
              <S.InfoLine><MdOutlinePhone size={15} />(02) 820-5935</S.InfoLine>
            </S.LabInfo>

            <S.EmailBlock>
              <S.EmailNotice>
                석·박사과정 및 학부연구생 지원 문의는 아래 이메일로 부탁드립니다.
              </S.EmailNotice>
              <S.EmailChips>
                <S.EmailChip href="mailto:jaewoo.cau@gmail.com">
                  <MdOutlineEmail size={14} />
                  jaewoo.cau@gmail.com
                </S.EmailChip>
                <S.EmailChip href="mailto:jaewoolee@cau.ac.kr">
                  <MdOutlineEmail size={14} />
                  jaewoolee@cau.ac.kr
                </S.EmailChip>
              </S.EmailChips>
            </S.EmailBlock>
          </S.ContactBox>
        </S.Top>

        <S.Sections>
          <S.Section>
            <S.SectionTop>
              <S.SectionTitle>대학원생 모집</S.SectionTitle>
              <S.Badge>모집 중</S.Badge>
            </S.SectionTop>
            <S.Desc>
              중앙대학교 사이버물리시스템 보안 연구실에서 연구자로 성장할 대학원생을 모집합니다.
            </S.Desc>
            <S.InfoGrid>
              <S.InfoRow>
                <S.InfoLabel>학과</S.InfoLabel>
                <S.InfoValue>일반대학원 융합보안학과</S.InfoValue>
              </S.InfoRow>
              <S.InfoRow>
                <S.InfoLabel>유형</S.InfoLabel>
                <S.InfoValue>Full-Time (전일제)</S.InfoValue>
              </S.InfoRow>
              <S.InfoRow>
                <S.InfoLabel>학위</S.InfoLabel>
                <S.InfoValue>
                  보안공학석사 / 보안경영석사 (석사과정)<br />
                  보안공학박사 / 보안경영박사 (박사과정)
                </S.InfoValue>
              </S.InfoRow>
              <S.InfoRow>
                <S.InfoLabel>혜택</S.InfoLabel>
                <S.InfoValue>연구 장학금, 연구 장비 지원, 해외 학술대회 발표 지원</S.InfoValue>
              </S.InfoRow>
            </S.InfoGrid>
            <S.Footnote>
              중앙대학교 일반대학원 융합보안학과는 학과 간 협동과정으로 운영되어,
              학·석사연계과정으로 지원할 수 없습니다.
            </S.Footnote>
          </S.Section>

          <S.Section>
            <S.SectionTop>
              <S.SectionTitle>학부연구생 모집</S.SectionTitle>
              <S.Badge>2026-1학기 모집 예정</S.Badge>
            </S.SectionTop>
            <S.Desc>
              중앙대학교 사이버물리시스템 보안 연구실에서 연구활동을 경험할 학부생을 모집합니다.
            </S.Desc>
            <S.InfoGrid>
              <S.InfoRow>
                <S.InfoLabel>지원 자격</S.InfoLabel>
                <S.InfoValue>소속 캠퍼스 및 주전공 제한 없음</S.InfoValue>
              </S.InfoRow>
              <S.InfoRow>
                <S.InfoLabel>혜택</S.InfoLabel>
                <S.InfoValue>
                  경력증명서 발급 가능 (
                  <S.DownloadLink href="/files/경력증명서.hwp" download>
                    해당 파일 다운로드
                  </S.DownloadLink>
                  {" "} 및 작성 후 메일 문의)</S.InfoValue>
              </S.InfoRow>
            </S.InfoGrid>
          </S.Section>
        </S.Sections>

        <S.UpdateNote>Last update: Jan. 31st, 2026.</S.UpdateNote>
      </PageContainer>
    </>
  );
}