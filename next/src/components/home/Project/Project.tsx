"use client";

import { useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import * as S from "./Project.styles";
import ProjectCard from "./ProjectCard";
import { projects } from "@/content/data";

export default function Project() {
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
      <S.Head>
        <S.Title>RESEARCH PROJECTS</S.Title>
      </S.Head>

      <S.SliderRow>
        <S.ArrowBtn type="button" onClick={prev} aria-label="Previous project">
          <FiChevronLeft />
        </S.ArrowBtn>

        <S.Viewport onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          <S.Track style={{ transform: `translateX(-${current * 100}%)` }}>
            {projects.map((project, i) => (
              <S.Slide key={i} aria-hidden={i !== current}>
                <ProjectCard {...project} onDark />
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
