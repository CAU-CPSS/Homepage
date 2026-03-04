"use client";

import styled from "styled-components";

export const Wrapper = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  background-color: black;
  background-image: url("/images/cpss-main.jpeg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  display: flex;
  align-items: center;
`;

export const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  color: #fff;
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const SubTitle = styled.h2`
  font-size: 28px;
  font-weight: 400;
  margin-bottom: 10px;
`;

export const KoreanTitle = styled.h3`
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 20px;
`;

export const List = styled.ul`
  width: 800px;
  font-weight: 200;
  font-size: 17px;
  margin-top: 25px;
  list-style: none;
  padding: 0;

  li {
    position: relative;
    padding-left: 20px;
    margin-bottom: 5px;
  }

  li::before {
    content: "✧";
    position: absolute;
    left: 0;
    top: 0;
  }

  @media (max-width: 1024px) {
    width: 90%;
  }
`;

export const Description = styled.p`
  margin-top: 20px;
  font-size: 16px;
`;