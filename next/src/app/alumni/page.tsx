"use client";

import { useState } from "react";

import Header from "@/components/layout/Header";
import AlumniCard, { type AlumniData } from "@/components/people/Alumni/AlumniCard";
import PeopleTabs from "@/components/people/PeopleTabs";
import alumni from "@/data/alumni.json";
import * as S from "./page.styles";
import {
  PageContainer,
  SectionCount,
  SectionHeader,
  SectionLabel,
} from "@/components/ui/Common.styles";
import { useT, type Localized } from "@/lib/i18n";

const SECTIONS: { key: string; label: Localized }[] = [
  { key: "graduates",      label: { ko: "대학원 졸업생", en: "Graduate Alumni" } },
  { key: "undergraduates", label: { ko: "학부 졸업생",   en: "Undergraduate Alumni" } },
];

type Order = "desc" | "asc";

const ORDERS: { value: Order; label: Localized }[] = [
  { value: "desc", label: { ko: "최신순", en: "Newest first" } },
  { value: "asc", label: { ko: "오래된순", en: "Oldest first" } },
];

/** 섹션마다 따로 정렬한다. 둘 다 최신순으로 시작. */
const DEFAULT_ORDERS: Record<string, Order> = Object.fromEntries(
  SECTIONS.map((section) => [section.key, "desc" as Order])
);

export default function AlumniPage() {
  const t = useT();
  const [orders, setOrders] = useState<Record<string, Order>>(DEFAULT_ORDERS);

  return (
    <>
      <Header title="Alumni" eyebrow="People" />

      <PageContainer>
        <PeopleTabs />

        {SECTIONS.map((section) => {
          const items = (alumni as Record<string, AlumniData[]>)[section.key];
          if (!items?.length) return null;

          const order = orders[section.key];
          /*
            연도가 같으면 JSON 에 적힌 순서를 따른다.
            최신순은 그 순서까지 뒤집어야 목록 전체가 오래된순의 정확한 역순이 된다.
            (정렬이 같은 값의 순서를 그대로 두기 때문에 인덱스를 직접 비교한다)
          */
          const sorted = items
            .map((item, i) => ({ item, i }))
            .sort((a, b) =>
              order === "desc"
                ? b.item.year - a.item.year || b.i - a.i
                : a.item.year - b.item.year || a.i - b.i
            )
            .map(({ item }) => item);

          return (
            <S.Section key={section.key}>
              <SectionHeader>
                <SectionLabel>{t(section.label)}</SectionLabel>
                <SectionCount>{items.length}</SectionCount>

                <S.SortSelect
                  aria-label={t({ ko: "정렬 순서", en: "Sort order" })}
                  value={order}
                  onChange={(e) =>
                    setOrders((prev) => ({
                      ...prev,
                      [section.key]: e.target.value as Order,
                    }))
                  }
                >
                  {ORDERS.map((o) => (
                    <option key={o.value} value={o.value}>
                      {t(o.label)}
                    </option>
                  ))}
                </S.SortSelect>
              </SectionHeader>

              <S.Grid>
                {sorted.map((a) => (
                  <AlumniCard key={`${a.name.en}-${a.year}`} alumni={a} />
                ))}
              </S.Grid>
            </S.Section>
          );
        })}
      </PageContainer>
    </>
  );
}
