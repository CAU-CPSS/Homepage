"use client";

import styled from "styled-components";
import Link from "next/link";

export const Navbar = styled.nav<{ $open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 2000;
  padding: 0 25px;
  background-color: rgba(0,0,0,.6);
  backdrop-filter: blur(6px);
  height: ${({ $open }) => ($open ? "140px" : "80px")};
  transition: height 0.25s ease;
  box-sizing: border-box;
`;

export const TopBar = styled.div`
  position: relative;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(Link)`
  font-size: 28px;
  font-weight: 600;
  text-decoration: none;
  color: white;
`;

export const Menu = styled.ul`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 40px;
  list-style: none;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li<{ $active?: boolean }>`
  position: relative;
  opacity: ${({ $active }) => ($active ? 1 : 0.6)};

  &:hover {
    opacity: 1;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 16px;
  font-weight: 600;
`;

export const Hamburger = styled.button<{ $open: boolean }>`
  display: none;
  font-size: 26px;
  color: white;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: ${({ $open }) => ($open ? "none" : "block")};
  }
`;

export const MobileMenu = styled.div<{ $open: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0,0,0,.75);
  color: white;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  padding: 80px 30px;
  gap: 20px;
  transform: translateX(${({ $open }) => ($open ? "0" : "100%")});
  transition: transform 0.3s ease;
  z-index: 2000;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 30px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
`;

export const MobileLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 22px;
`;

export const PeopleSubMenu = styled.div<{ $open: boolean }>`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};

  transition: opacity 0.2s ease;
`;

export const SubLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 14.5px;
  font-weight: 600;
  padding: 6px 0;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;