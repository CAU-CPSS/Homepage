"use client";

import { useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import * as S from "./Project.styles";
import ProjectCard from "./ProjectCard";
import ProjectBackground from "./ProjectBackground";
import { projects } from "@/content/data";
import { useT } from "@/lib/i18n";

const LEAD = {
  ko: "정부·기업과 함께 수행한 연구 과제입니다.",
  en: "Research projects carried out with government agencies and industry partners.",
};

export default function Project() {
  const t = useT();
  const [current, setCurrent] = useState(0);
  const total = projects.length;

  const startX = useRef<number | null>(null);

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (startX.current === null) return;

    const diff = startX.current - e.changedTouches[0].clientX;

    if (diff > 50) next();
    if (diff < -50) prev();

    startX.current = null;
  };

  return (
    <S.Section id="projects">
      <ProjectBackground />

      <S.Head>
        <S.Title>RESEARCH PROJECTS</S.Title>
        <S.Lead>{t(LEAD)}</S.Lead>
      </S.Head>

      <S.SliderRow>
        <S.ArrowBtn type="button" onClick={prev} aria-label="Previous project">
          <FiChevronLeft />
        </S.ArrowBtn>

        <S.Viewport onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          <S.Track style={{ transform: `translateX(-${current * 100}%)` }}>
            {projects.map((project, i) => (
              <S.Slide key={i} aria-hidden={i !== current}>
                <ProjectCard {...project} />
              </S.Slide>
            ))}
          </S.Track>
        </S.Viewport>

        <S.ArrowBtn type="button" onClick={next} aria-label="Next project">
          <FiChevronRight />
        </S.ArrowBtn>
      </S.SliderRow>

      <S.Indicators>
        {projects.map((_, i) => (
          <S.Dot
            key={i}
            type="button"
            $active={i === current}
            aria-label={`Project ${i + 1}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </S.Indicators>
    </S.Section>
  );
}
