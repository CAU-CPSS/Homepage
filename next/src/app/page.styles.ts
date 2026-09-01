"use client";

import styled from "styled-components";

/**
 * Research · Projects · News 를 하나의 배경 위에 얹는 묶음.
 * 세 섹션이 각자 배경을 갖는 대신, 여기 깔린 인터랙티브 캔버스 하나를 공유한다.
 */
export const Sections = styled.div`
  position: relative;
  background: var(--navy-950);
`;

/**
 * 캔버스는 묶음 전체 높이를 덮고, 섹션 내용은 그 위에 올라간다.
 *
 * 배경색은 캔버스·묶음·푸터가 모두 --navy-950 로 같지만, 파티클이 푸터
 * 경계에서 그대로 끊기면 선이 보인다. 아래쪽 220px 구간에서 파티클만
 * 서서히 사라지게 해 푸터로 자연스럽게 이어지도록 한다.
 */
export const Backdrop = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  mask-image: linear-gradient(
    to bottom,
    #000 calc(100% - 220px),
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    to bottom,
    #000 calc(100% - 220px),
    transparent 100%
  );
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
`;
