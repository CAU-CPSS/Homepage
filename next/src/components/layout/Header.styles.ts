import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 160px 25px 100px;
  background-image: url('/images/header-bg.png');
  background-size: cover;
  background-position: center;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(10, 20, 50, 0.5) 0%,
      rgba(5, 12, 30, 0.7) 100%
    );
    z-index: 0;
  }
`;

export const Title = styled.h1`
  color: #ffffff;
  letter-spacing: 0.05em;
  z-index: 1;
`;

export const Subtitle = styled.span`
  margin-top: 12px;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 0.05em;
  z-index: 1;
`;