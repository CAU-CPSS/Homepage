import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  padding: 100px 0;
  overflow: hidden;
`;

export const SectionTitle = styled.h1`
  position: relative;
  z-index: 1;
  text-align: center;
  letter-spacing: 0.15em;
  color: #111827;
  margin-bottom: 50px;
`;

export const SliderRow = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 25px;
`;

export const ArrowBtn = styled.button`
  width: 30px;
  height: 30px;
  font-size: 28px;
  background: none;
  border: none;
  cursor: pointer;
  color: #9ca3af;

  &:hover {
    color: #111827;
  }
`;

export const Viewport = styled.div`
  overflow: hidden;
  width: 100%;
  max-width: 1100px;
`;

export const Track = styled.div`
  display: flex;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Slide = styled.div`
  position: relative;
  z-index: 1;
  min-width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
`;

export const Indicators = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 44px;
`;

export const Dot = styled.button<{ $active: boolean }>`
  width: ${({ $active }) => ($active ? "22px" : "6px")};
  height: 6px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  padding: 0;
  background-color: ${({ $active }) => ($active ? "#1a2a6c" : "#d1d5db")};
  transition: all 0.3s ease;
`;