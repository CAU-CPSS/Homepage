"use client";

import { useEffect, useRef, useState } from "react";
import Header from "@/components/layout/Header";
import researchAreas from "@/data/research.json";
import projects from "@/data/projects.json";
import ProjectCard from "@/components/home/Project/ProjectCard";
import * as S from "./page.styles";

interface ResearchArea {
  index: string;
  title: string;
  image: string;
  description: string;
}

interface Project {
  sponsor: string;
  title: string;
  period: string;
  type: string | null;
}

export default function ResearchPage() {
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
      <Header title="Research" />
      <S.Container>
        {(researchAreas as ResearchArea[]).map((area, i) => (
          <S.ResearchSection
            key={area.index}
            $reverse={Number(area.index) % 2 === 0}
            $visible={visible[i]}
            ref={(el) => { refs.current[i] = el; }}
          >
            <S.ImageWrapper>
              <S.Image src={area.image} alt={area.title} />
            </S.ImageWrapper>
            <S.Content>
              <S.IndexLabel>Research Area {area.index}</S.IndexLabel>
              <S.Title>{area.title}</S.Title>
              <S.Divider />
              <S.Description>{area.description}</S.Description>
            </S.Content>
          </S.ResearchSection>
        ))}

        <S.ProjectsSection>
          <S.SectionTitle>Projects</S.SectionTitle>
          <S.ProjectsGrid>
            {(projects as Project[]).map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))}
          </S.ProjectsGrid>
        </S.ProjectsSection>
      </S.Container>
    </>
  );
}