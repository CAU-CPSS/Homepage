"use client";

import styled from "styled-components";

export const Section = styled.section`
  margin-bottom: 56px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

/** 섹션 제목과 같은 줄, 오른쪽 끝에 붙는 정렬 선택 */
export const SortSelect = styled.select`
  font-family: inherit;
  margin-left: auto;
  align-self: center;
  padding: 6px 28px 6px 11px;
  border: 1px solid var(--line);
  border-radius: var(--r-sm);
  background: #ffffff;
  color: var(--body);
  font-size: 0.78rem;
  cursor: pointer;

  /* 기본 화살표를 지우고 같은 모양을 직접 그린다 */
  appearance: none;
  background-image: linear-gradient(45deg, transparent 50%, var(--muted) 50%),
    linear-gradient(135deg, var(--muted) 50%, transparent 50%);
  background-position: calc(100% - 15px) 52%, calc(100% - 11px) 52%;
  background-size: 4px 4px, 4px 4px;
  background-repeat: no-repeat;

  &:hover {
    border-color: var(--line-strong);
  }
`;
