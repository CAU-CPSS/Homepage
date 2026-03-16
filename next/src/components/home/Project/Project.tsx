"use client";

import { useState, useRef } from "react";
import * as S from "./Project.styles";
import ProjectCard from "./ProjectCard";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import projects from "@/data/projects.json";
import Image from "next/image";
import ProjectBackground from "./ProjectBackground";

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
    <S.Section>
      <ProjectBackground />
      <S.SectionTitle>RESEARCH PROJECTS</S.SectionTitle>

      <S.SliderRow>
        <S.ArrowBtn onClick={prev}>
          <FiChevronLeft />
        </S.ArrowBtn>

        <S.Viewport
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <S.Track style={{ transform: `translateX(-${current * 100}%)` }}>
            {projects.map((p, i) => (
              <S.Slide key={i}>
                <ProjectCard
                  title={p.title}
                  period={p.period}
                  sponsor={p.sponsor}
                  type={p.type}
                />
              </S.Slide>
            ))}
          </S.Track>
        </S.Viewport>

        <S.ArrowBtn onClick={next}>
          <FiChevronRight />
        </S.ArrowBtn>
      </S.SliderRow>

      <S.Indicators>
        {projects.map((_, i) => (
          <S.Dot
            key={i}
            $active={i === current}
            onClick={() => setCurrent(i)}
          />
        ))}
      </S.Indicators>
    </S.Section>
  );
}