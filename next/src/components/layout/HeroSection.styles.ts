import styled from "styled-components";

export const Wrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 105px 25px;
  height: 100vh;
  width: 100%;
  background-color: #1a1a1a;
  color: #fff;

  @media (max-width: 768px) {
    padding-top: 80px;
  }
`;

export const Title = styled.h1`
  line-height: 1.2;
  z-index: 1000;
  margin-bottom: 10px;
`;

export const Line = styled.span`
  display: block;
`;

export const LineDesktop = styled.span`
  display: block;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LineMobile = styled.span`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const Description = styled.h3`
  z-index: 1000;
`;

export const Scroll = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 24px;
  color: rgba(255, 255, 255, 0.8);
`;