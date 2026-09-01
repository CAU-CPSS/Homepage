"use client";

import { useEffect, useRef, useState } from "react";

import Header from "@/components/layout/Header";
import ProjectCard from "@/components/home/Project/ProjectCard";
import * as S from "./page.styles";
import { projects, researchAreas } from "@/content/data";
import { useT } from "@/lib/i18n";

const COPY = {
  headerDesc: {
    ko: "AI와 디바이스의 융합을 시스템 관점에서 접근하여, 학문적 연구를 넘어 실제 산업에 적용할 수 있는 시스템을 구현합니다.",
    en: "We approach the convergence of AI and devices from a systems perspective, building systems that go beyond academic results and into real industrial use.",
  },
  projects: {
    ko: "정부·기업과 함께 수행한 연구 과제입니다.",
    en: "Research projects carried out with government agencies and industry partners.",
  },
};

export default function ResearchPage() {
  const t = useT();
  const [visible, setVisible] = useState<boolean[]>(
    () => new Array(researchAreas.length).fill(false)
  );
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = refs.current.indexOf(entry.target as HTMLElement);
          if (entry.isIntersecting && idx !== -1) {
            setVisible((prev) => {
              const next = [...prev];
              next[idx] = true;
              return next;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header title="Research" description={t(COPY.headerDesc)} />

      <S.Container>
        {researchAreas.map((area, i) => (
          <S.ResearchSection
            key={area.id}
            id={area.id}
            $reverse={i % 2 === 1}
            $visible={visible[i]}
            ref={(el) => {
              refs.current[i] = el;
            }}
          >
            <S.ImageWrapper>
              <S.Image src={area.image} alt={area.title} />
            </S.ImageWrapper>

            <S.Content>
              <S.IndexLabel>Research Area {area.index}</S.IndexLabel>
              <S.Title>{area.title}</S.Title>
              <S.Subtitle>{t(area.subtitle)}</S.Subtitle>

              <S.Keywords>
                {t(area.keywords).map((keyword) => (
                  <S.Keyword key={keyword}>{keyword}</S.Keyword>
                ))}
              </S.Keywords>

              <S.Divider />

              {t(area.description)
                .split("\n\n")
                .map((paragraph, pi) => (
                  <S.Description key={pi}>{paragraph}</S.Description>
                ))}
            </S.Content>
          </S.ResearchSection>
        ))}

        <S.ProjectsSection id="projects">
          <S.SectionTitle>Projects</S.SectionTitle>
          <S.SectionLead>{t(COPY.projects)}</S.SectionLead>

          <S.ProjectsGrid>
            {projects.map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))}
          </S.ProjectsGrid>
        </S.ProjectsSection>
      </S.Container>
    </>
  );
}
