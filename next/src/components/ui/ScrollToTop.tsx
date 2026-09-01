"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * 페이지를 이동하면 항상 맨 위에서 시작하도록 한다.
 * 다만 `/research#cps-safety` 처럼 해시가 붙어 들어온 경우에는
 * 브라우저의 앵커 스크롤을 방해하지 않는다.
 */
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.location.hash) {
      const target = document.getElementById(
        decodeURIComponent(window.location.hash.slice(1))
      );

      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }

    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
}
