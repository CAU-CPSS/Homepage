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

export default function AlumniPage() {
  const t = useT();
  const [order, setOrder] = useState<Order>("desc");

  const sort = (items: AlumniData[]) =>
    [...items].sort((a, b) => (order === "desc" ? b.year - a.year : a.year - b.year));

  return (
    <>
      <Header title="Alumni" eyebrow="People" />

      <PageContainer>
        <PeopleTabs />

        <S.Toolbar>
          <S.SortSelect
            aria-label={t({ ko: "정렬 순서", en: "Sort order" })}
            value={order}
            onChange={(e) => setOrder(e.target.value as Order)}
          >
            {ORDERS.map((o) => (
              <option key={o.value} value={o.value}>
                {t(o.label)}
              </option>
            ))}
          </S.SortSelect>
        </S.Toolbar>

        {SECTIONS.map((section) => {
          const items = (alumni as Record<string, AlumniData[]>)[section.key];
          if (!items?.length) return null;

          return (
            <S.Section key={section.key}>
              <SectionHeader>
                <SectionLabel>{t(section.label)}</SectionLabel>
                <SectionCount>{items.length}</SectionCount>
              </SectionHeader>

              <S.Grid>
                {sort(items).map((a) => (
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
