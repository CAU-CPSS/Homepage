"use client";

import styled from "styled-components";
import Link from "next/link";

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(Link)`
  font-size: 28px;
  font-weight: 600;
  text-decoration: none;
  color: #000;
`;

export const Menu = styled.ul`
  display: flex;
  gap: 40px;
  list-style: none;
  margin: 0;
  padding: 0;
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
  color: inherit;
  font-size: 15px;
  font-weight: 500;
`;

export const DropdownWrapper = styled.div`
  position: relative;

  &:hover ul {
    display: block;
  }
`;

export const Dropdown = styled.ul`
  display: none;
  position: absolute;
  top: 30px;
  left: 0;
  background: white;
  padding: 10px 0;
  list-style: none;
  border: 1px solid #eee;
`;

export const DropdownItem = styled(Link)`
  display: block;
  padding: 8px 20px;
  text-decoration: none;
  color: #000;

  &:hover {
    background: #f5f5f5;
  }
`;