import styled from "styled-components";

export const Wrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 105px 25px;
  height: 100vh;
  width: 100%;
  color: #fff;

  @media (max-width: 768px) {
    padding-top: 80px;
  }
`;

export const Title = styled.h1`
  z-index: 1000;
  font-size: 6rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2.5rem;
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