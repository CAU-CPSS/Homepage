import HeroSection from "@/components/home/HeroSection/HeroSection";
import * as S from "./page.styles";
import Research from "@/components/home/Research/Research";
import Project from "@/components/home/Project/Project";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <S.Wrapper>
        <S.Container>
          <Research />
          <Project />
        </S.Container>
      </S.Wrapper>
    </>
  );
}
