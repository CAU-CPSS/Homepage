"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import * as S from "./Nav.styles";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";

const Nav = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [memberHover, setMemberHover] = useState(false);
  const closeMobile = () => setMobileOpen(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileOpen]);

  return (
    <S.Navbar
      $open={memberHover}
      onMouseLeave={() => setMemberHover(false)}
    >
      <S.TopBar>
        <S.Logo href="/">CPSS Lab</S.Logo>

        <S.Menu>
          <S.NavItem $active={pathname.startsWith("/research")} onMouseEnter={() => setMemberHover(false)}>
            <S.NavLink href="/research">Research</S.NavLink>
          </S.NavItem>

          <S.NavItem
            $active={pathname.startsWith("/members")}
            onMouseEnter={() => setMemberHover(true)}
          >
            <S.NavLink href="/members">People</S.NavLink>

            <S.PeopleSubMenu
              $open={memberHover}
              onMouseEnter={() => setMemberHover(true)}
              onMouseLeave={() => setMemberHover(false)}
            >
              <S.SubLink href="/members">Members</S.SubLink>
              <S.SubLink href="/alumni">Alumni</S.SubLink>
            </S.PeopleSubMenu>
          </S.NavItem>

          <S.NavItem $active={pathname === "/publications"} onMouseEnter={() => setMemberHover(false)}>
            <S.NavLink href="/publications">Publications</S.NavLink>
          </S.NavItem>

          <S.NavItem $active={pathname === "/contact"} onMouseEnter={() => setMemberHover(false)}>
            <S.NavLink href="/contact">Contact</S.NavLink>
          </S.NavItem>
        </S.Menu>

        <S.Hamburger $open={mobileOpen} onClick={() => setMobileOpen(true)}>
          <FiMenu />
        </S.Hamburger>
      </S.TopBar>

      <S.MobileMenu $open={mobileOpen}>
        <S.CloseButton onClick={closeMobile}>
          <FiX />
        </S.CloseButton>

        <S.MobileLink href="/research" onClick={closeMobile}>
          Research
        </S.MobileLink>

        <S.MobileLink href="/members" onClick={closeMobile}>
          Members
        </S.MobileLink>

        <S.MobileLink href="/alumni" onClick={closeMobile}>
          Alumni
        </S.MobileLink>

        <S.MobileLink href="/publications" onClick={closeMobile}>
          Publications
        </S.MobileLink>

        <S.MobileLink href="/contact" onClick={closeMobile}>
          Contact
        </S.MobileLink>
      </S.MobileMenu>
    </S.Navbar>
  );
};

export default Nav;