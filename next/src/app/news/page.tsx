"use client";

import { useMemo, useState } from "react";

import Header from "@/components/layout/Header";
import { PageContainer } from "@/components/ui/Common.styles";
import * as S from "./page.styles";
import { newsItems } from "@/content/data";
import { newsCategories, type NewsCategory } from "@/content/vocab";
import { ui } from "@/content/site";
import { useT } from "@/lib/i18n";

const COPY = {
  headerDesc: {
    ko: "연구실의 논문 게재, 수상, 구성원 소식을 전합니다.",
    en: "Paper acceptances, awards, and news from the members of our lab.",
  },
  all: { ko: "전체", en: "All" },
};

type Filter = NewsCategory | "all";

export default function NewsPage() {
  const t = useT();
  const [filter, setFilter] = useState<Filter>("all");

  /** 실제로 소식이 있는 카테고리만 필터로 보여준다. */
  const filters = useMemo<Filter[]>(() => {
    const used = (Object.keys(newsCategories) as NewsCategory[]).filter((category) =>
      newsItems.some((item) => item.category === category)
    );
    return ["all", ...used];
  }, []);

  const items =
    filter === "all"
      ? newsItems
      : newsItems.filter((item) => item.category === filter);

  return (
    <>
      <Header title="News" description={t(COPY.headerDesc)} />

      <PageContainer>
        <S.Filters>
          {filters.map((key) => (
            <S.FilterChip
              key={key}
              type="button"
              $active={filter === key}
              aria-pressed={filter === key}
              onClick={() => setFilter(key)}
            >
              {key === "all" ? t(COPY.all) : t(newsCategories[key])}
            </S.FilterChip>
          ))}
        </S.Filters>

        {items.length === 0 ? (
          <S.Empty>{t(ui.preparingDesc)}</S.Empty>
        ) : (
          <S.List>
            {items.map((item) => (
              <S.Item key={item.id} id={item.id}>
                <S.Meta>
                  <S.Date>{item.date}</S.Date>
                  <S.Category>{t(newsCategories[item.category])}</S.Category>
                </S.Meta>

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
