"use client";

import * as S from "./Research.styles";
import ResearchBackground from "./ResearchBackground";
import { researchAreas } from "@/content/data";
import { ui } from "@/content/site";
import { useT } from "@/lib/i18n";

const COPY = {
  points: {
    ko: [
      "AI와 디바이스의 융합을 시스템 관점에서 접근하여 효율적인 응용 방안을 연구합니다.",
      "학문적인 연구를 넘어 실제 산업에 적용할 수 있는 시스템을 구현합니다.",
    ],
    en: [
      "We study efficient ways to apply AI on devices, approached from a systems perspective.",
      "We build systems that go beyond academic results and into real industrial use.",
    ],
  },
  keywords: {
    ko: "주요 연구분야: Real-time System, Mixed Criticality, On-device AI, Federated Learning, Security",
    en: "Key areas: Real-time System, Mixed Criticality, On-device AI, Federated Learning, Security",
  },
};

export default function Research() {
  const t = useT();

  return (
    <S.Section id="research">
      <ResearchBackground />
      <S.SectionTitle>RESEARCH</S.SectionTitle>

      <S.SectionDescriptionUl>
        {t(COPY.points).map((point) => (
          <li key={point}>{point}</li>
        ))}
      </S.SectionDescriptionUl>

      <S.SectionDescriptionSpan>{t(COPY.keywords)}</S.SectionDescriptionSpan>

      <S.CardGrid>
        {researchAreas.map((area) => (
          <S.Card key={area.id} href={`/research#${area.id}`} $image={area.image}>
            <S.CardContent>
              <S.CardLabel>Area {area.index}</S.CardLabel>
              <S.CardTitle>{area.title}</S.CardTitle>
            </S.CardContent>

            <S.MoreLabel>{t(ui.viewMore)}</S.MoreLabel>
          </S.Card>
        ))}
      </S.CardGrid>
    </S.Section>
  );
}
