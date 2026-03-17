"use client";

import * as S from "./Research.styles";
import ResearchBackground from "./ResearchBackground";
import researchAreas from "@/data/research.json";

export default function Research() {
  return (
    <S.Section>
      <ResearchBackground />
      <S.SectionTitle>RESEARCH</S.SectionTitle>

      <S.SectionDescriptionUl>
        <li>AI와 디바이스의 융합을 시스템 관점에서 접근하여 효율적인 응용 방안을 연구합니다.</li>
        <li>학문적인 연구를 넘어 실제 산업에 적용할 수 있는 시스템을 구현합니다.</li>
      </S.SectionDescriptionUl>

      <S.SectionDescriptionSpan>
        주요 연구분야: OS, On-device, Embedded, Real-time system, Security
      </S.SectionDescriptionSpan>

      <S.CardGrid>
        {researchAreas.map((area) => (
          <S.Card key={area.index} href="/research" image={area.image}>
            <S.CardContent>
              <S.CardLabel>Topic {area.index}</S.CardLabel>
              <S.CardTitle>{area.title}</S.CardTitle>
            </S.CardContent>

            <S.MoreLabel>View More</S.MoreLabel>
          </S.Card>
        ))}
      </S.CardGrid>
    </S.Section>
  );
}