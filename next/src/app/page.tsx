import HeroSection from "@/components/home/HeroSection/HeroSection";
import Research from "@/components/home/Research/Research";
import Project from "@/components/home/Project/Project";
import News from "@/components/home/News/News";
import ResearchBackground from "@/components/home/Research/ResearchBackground";
import * as S from "./page.styles";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* 세 섹션이 인터랙티브 배경 하나를 공유한다 */}
      <S.Sections>
        <S.Backdrop>
          <ResearchBackground />
        </S.Backdrop>

        <S.Content>
          <Research />
          <Project />
          <News />
        </S.Content>
      </S.Sections>
    </>
  );
}
