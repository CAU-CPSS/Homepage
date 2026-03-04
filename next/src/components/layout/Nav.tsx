"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import * as S from "./Nav.styles";

const Nav = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Navbar>
      <S.Logo href="/">CPSS Lab</S.Logo>

      <S.Menu>
        <S.NavItem $active={pathname === "/"}>
          <S.NavLink href="/">Home</S.NavLink>
        </S.NavItem>

        <S.NavItem $active={pathname.startsWith("/research")}>
          <S.NavLink href="/research">Research</S.NavLink>
        </S.NavItem>

        <S.NavItem $active={pathname.startsWith("/members")}>
          <S.DropdownWrapper>
            <S.NavLink href="/members">Members</S.NavLink>
            <S.Dropdown>
              <S.DropdownItem href="/members">
                Members
              </S.DropdownItem>
              <S.DropdownItem href="/alumni">
                Alumni
              </S.DropdownItem>
            </S.Dropdown>
          </S.DropdownWrapper>
        </S.NavItem>

        <S.NavItem $active={pathname === "/publications"}>
          <S.NavLink href="/publications">Publications</S.NavLink>
        </S.NavItem>

        <S.NavItem $active={pathname === "/contact"}>
          <S.NavLink href="/contact">Contact</S.NavLink>
        </S.NavItem>
      </S.Menu>
    </S.Navbar>
  )
}

export default Nav