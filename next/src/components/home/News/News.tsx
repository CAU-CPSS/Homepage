"use client";

import * as S from "./News.styles";
import { newsItems } from "@/content/data";
import { ui } from "@/content/site";
import { useT } from "@/lib/i18n";

/** 홈 첫 화면에 노출할 최신 소식 개수 */
const PREVIEW_COUNT = 4;

export default function News() {
  const t = useT();
  const items = newsItems.slice(0, PREVIEW_COUNT);

  return (
    <S.Section id="news">
      <S.Inner>
        <S.Title>NEWS</S.Title>

        {items.length === 0 ? (
          <S.Empty>{t(ui.preparing)}</S.Empty>
        ) : (
          <>
            <S.ListHead>
              <S.ViewAll href="/news">{t(ui.viewAll)}</S.ViewAll>
            </S.ListHead>

            <S.List>
              {items.map((item) => (
                <S.Item key={item.id}>
                  <S.Row>
                    <S.Date>{item.date}</S.Date>
                    <S.ItemTitle>{t(item.title)}</S.ItemTitle>
                  </S.Row>
                </S.Item>
              ))}
            </S.List>
          </>
        )}
      </S.Inner>
    </S.Section>
  );
}
