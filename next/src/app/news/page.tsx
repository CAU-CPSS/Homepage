"use client";

import Header from "@/components/layout/Header";
import { PageContainer } from "@/components/ui/Common.styles";
import * as S from "./page.styles";
import { newsItems } from "@/content/data";
import { ui } from "@/content/site";
import { useT } from "@/lib/i18n";

const COPY = {
  headerDesc: {
    ko: "연구실의 논문 게재, 수상, 구성원 소식을 전합니다.",
    en: "Paper acceptances, awards, and news from the members of our lab.",
  },
};

export default function NewsPage() {
  const t = useT();

  return (
    <>
      <Header title="News" description={t(COPY.headerDesc)} />

      <PageContainer>
        {newsItems.length === 0 ? (
          <S.Empty>{t(ui.preparingDesc)}</S.Empty>
        ) : (
          <S.List>
            {newsItems.map((item) => (
              <S.Item key={item.id} id={item.id}>
                <S.Date>{item.date}</S.Date>

                <S.Body>
                  <S.Title>{t(item.title)}</S.Title>
                  <S.Text>{t(item.body)}</S.Text>
                </S.Body>
              </S.Item>
            ))}
          </S.List>
        )}
      </PageContainer>
    </>
  );
}
