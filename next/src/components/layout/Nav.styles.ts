"use client";

import styled from "styled-components";
import Link from "next/link";

/**
 * 네비게이션은 두 가지 상태를 가진다.
 * - 페이지 최상단($solid=false): 어두운 히어로 위에 얹히므로 완전히 투명
 * - 스크롤 이후($solid=true): 흐린 유리 배경이 깔린다
 *
 * 배경과 blur 는 ::before 에 고정으로 걸어두고 opacity 만 전환한다.
 * backdrop-filter 를 none <-> blur() 로 직접 전환하면 브라우저에 따라
 * blur 가 아예 적용되지 않는 경우가 있어서다. (opacity:0 이면 렌더되지 않으므로
 * 최상단에서는 blur 도 걸리지 않는다.)
 *
 * 글자는 두 상태 모두 흰색이다. 홈이 다크·라이트 섹션을 번갈아 지나가므로
 * 흰 배경 바를 쓰면 다크 섹션 위에서 지나치게 튄다.
 */
export const Navbar = styled.header<{ $solid: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10000;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(10, 14, 26, 0.78);
    backdrop-filter: blur(20px) saturate(160%);
    -webkit-backdrop-filter: blur(20px) saturate(160%);
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.28);
    opacity: ${({ $solid }) => ($solid ? 1 : 0)};
    transition: opacity 0.3s var(--ease);
  }
`;

export const Inner = styled.div`
  position: relative;
  z-index: 1;
  max-width: var(--container);
  height: var(--nav-h);
  margin: 0 auto;
  padding: 0 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const Logo = styled(Link)`
  font-family: var(--font-montserrat), sans-serif;
  font-size: 1.35rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  text-decoration: none;
  white-space: nowrap;
  color: #ffffff;
  transition: opacity 0.2s var(--ease);

  &:hover {
    opacity: 0.75;
  }

  @media (max-width: 380px) {
    font-size: 1.15rem;
  }
`;

export const Menu = styled.nav`
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  align-items: center;
  gap: 2px;
  list-style: none;
`;

export const MenuItem = styled.li`
  position: relative;
`;

export const NavLink = styled(Link)<{ $active: boolean }>`
  font-family: var(--font-montserrat), sans-serif;
  display: inline-block;
  padding: 8px 14px;
  border-radius: var(--r-sm);
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
  transition: color 0.25s var(--ease);

  color: ${({ $active }) => ($active ? "#ffffff" : "rgba(255, 255, 255, 0.7)")};

  ${MenuItem}:hover & {
    color: #ffffff;
  }
`;

/** 링크 아래에서 좌→우로 늘어나는 밑줄 */
export const Underline = styled.span<{ $active: boolean }>`
  display: block;
  height: 2px;
  margin-top: 5px;
  border-radius: var(--r-full);
  background: var(--accent-bright);
  transform-origin: left;
  transform: scaleX(${({ $active }) => ($active ? 1 : 0)});
  transition: transform 0.3s var(--ease), background 0.3s var(--ease);

  ${MenuItem}:hover & {
    transform: scaleX(1);
  }
`;

export const Dropdown = styled.div<{ $open: boolean }>`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  padding-top: 10px;
  width: 190px;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
  transition: opacity 0.2s var(--ease);
`;

export const DropdownPanel = styled.ul`
  list-style: none;
  overflow: hidden;
  padding: 6px;
  border-radius: var(--r-md);
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(18, 23, 38, 0.82);
  backdrop-filter: blur(16px) saturate(140%);
  -webkit-backdrop-filter: blur(16px) saturate(140%);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
`;

export const DropdownLink = styled(Link)<{ $active: boolean }>`
  display: block;
  padding: 9px 12px;
  border-radius: var(--r-sm);
  font-size: 0.875rem;
  font-weight: ${({ $active }) => ($active ? 700 : 500)};
  color: ${({ $active }) => ($active ? "#ffffff" : "rgba(255, 255, 255, 0.68)")};
  text-decoration: none;
  transition: background 0.15s var(--ease), color 0.15s var(--ease);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #ffffff;
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Hamburger = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border: none;
  border-radius: var(--r-sm);
  background: none;
  cursor: pointer;
  font-size: 22px;
  color: #ffffff;

  @media (max-width: 1024px) {
    display: flex;
  }
`;

/* ---------------- 모바일 드로어 ---------------- */

export const Drawer = styled.div<{ $open: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 10001;
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};

  @media (min-width: 1025px) {
    display: none;
  }
`;

export const Scrim = styled.div<{ $open: boolean }>`
  position: absolute;
  inset: 0;
  background: rgba(6, 13, 26, 0.45);
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transition: opacity 0.3s var(--ease);
`;

export const Panel = styled.aside<{ $open: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 82%;
  max-width: 340px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: -8px 0 40px rgba(16, 24, 40, 0.18);
  transform: translateX(${({ $open }) => ($open ? "0" : "100%")});
  transition: transform 0.3s var(--ease);
`;

export const PanelHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--nav-h);
  padding: 0 20px;
  border-bottom: 1px solid var(--line);
`;

export const PanelTitle = styled.span`
  font-family: var(--font-montserrat), sans-serif;
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--navy-800);
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  margin-right: -8px;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 24px;
  color: var(--navy-800);
`;

export const PanelNav = styled.nav`
  flex: 1;
  overflow-y: auto;
  padding: 18px 14px;
`;

export const PanelList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const PanelLink = styled(Link)<{ $active: boolean }>`
  font-family: var(--font-montserrat), sans-serif;
  display: block;
  padding: 11px 12px;
  border-radius: var(--r-sm);
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  color: ${({ $active }) => ($active ? "var(--navy-800)" : "var(--muted)")};
  background: ${({ $active }) => ($active ? "var(--navy-50)" : "transparent")};
`;

export const PanelSubLink = styled(Link)<{ $active: boolean }>`
  display: block;
  padding: 8px 12px 8px 26px;
  border-radius: var(--r-sm);
  font-size: 0.875rem;
  font-weight: ${({ $active }) => ($active ? 700 : 500)};
  text-decoration: none;
  color: ${({ $active }) => ($active ? "var(--navy-800)" : "var(--subtle)")};
`;

export const PanelFoot = styled.div`
  padding: 18px 20px 22px;
  border-top: 1px solid var(--line);
`;

export const PanelFootName = styled.p`
  margin-top: 14px;
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--navy-800);
`;

export const PanelFootDesc = styled.p`
  margin-top: 2px;
  font-size: 0.78rem;
  color: var(--subtle);
`;
