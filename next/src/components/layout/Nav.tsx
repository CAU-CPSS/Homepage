"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import * as S from "./Nav.styles";
import LangToggle from "@/components/ui/LangToggle";
import { navigation, peoplePages, site, ui, type NavNode } from "@/content/site";
import { useT } from "@/lib/i18n";

/** People 처럼 하위 경로가 여러 개인 메뉴까지 한 번에 판정한다. */
function isActive(node: NavNode, pathname: string) {
  if (node.label === "People") {
    return peoplePages.some((page) => pathname.startsWith(page.href));
  }
  return node.match ? pathname.startsWith(node.match) : pathname === node.href;
}

const Nav = () => {
  const pathname = usePathname();
  const t = useT();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  // 모든 페이지가 어두운 히어로로 시작하므로, 최상단에서만 투명 네비를 쓴다.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 드로어가 열려 있는 동안 배경 스크롤 잠금
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const solid = scrolled;
  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <S.Navbar $solid={solid} onMouseLeave={() => setOpenMenu(null)}>
        <S.Inner>
          <S.Logo href="/">
            {site.shortName}
          </S.Logo>

          <S.Menu>
            <S.MenuList>
              {navigation.map((node) => {
                const active = isActive(node, pathname);

                return (
                  <S.MenuItem
                    key={node.href}
                    onMouseEnter={() => setOpenMenu(node.children ? node.label : null)}
                  >
                    <S.NavLink href={node.href} $active={active}>
                      {node.label}
                      <S.Underline $active={active} />
                    </S.NavLink>

                    {node.children && (
                      <S.Dropdown $open={openMenu === node.label}>
                        <S.DropdownPanel>
                          {node.children.map((child) => (
                            <li key={child.href}>
                              <S.DropdownLink
                                href={child.href}
                                $active={pathname === child.href}
                              >
                                {child.label}
                              </S.DropdownLink>
                            </li>
                          ))}
                        </S.DropdownPanel>
                      </S.Dropdown>
                    )}
                  </S.MenuItem>
                );
              })}
            </S.MenuList>
          </S.Menu>

          <S.Right>
            <LangToggle onDark />
            <S.Hamburger
              type="button"
              aria-label={t(ui.openMenu)}
              onClick={() => setMobileOpen(true)}
            >
              <FiMenu />
            </S.Hamburger>
          </S.Right>
        </S.Inner>
      </S.Navbar>

      <S.Drawer $open={mobileOpen} aria-hidden={!mobileOpen}>
        <S.Scrim $open={mobileOpen} onClick={closeMobile} />

        <S.Panel $open={mobileOpen}>
          <S.PanelHead>
            <S.PanelTitle>{site.shortName}</S.PanelTitle>
            <S.CloseButton type="button" aria-label={t(ui.closeMenu)} onClick={closeMobile}>
              <FiX />
            </S.CloseButton>
          </S.PanelHead>

          {/* 링크를 누르면 드로어를 닫는다 — 이벤트 위임 */}
          <S.PanelNav onClick={closeMobile}>
            <S.PanelList>
              {navigation.map((node) => (
                <li key={node.href}>
                  <S.PanelLink href={node.href} $active={isActive(node, pathname)}>
                    {node.label}
                  </S.PanelLink>

                  {node.children?.map((child) => (
                    <S.PanelSubLink
                      key={child.href}
                      href={child.href}
                      $active={pathname === child.href}
                    >
                      {child.label}
                    </S.PanelSubLink>
                  ))}
                </li>
              ))}
            </S.PanelList>
          </S.PanelNav>

          <S.PanelFoot>
            <LangToggle />
          </S.PanelFoot>
        </S.Panel>
      </S.Drawer>
    </>
  );
};

export default Nav;
