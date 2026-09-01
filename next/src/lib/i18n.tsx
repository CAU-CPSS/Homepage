"use client";

/**
 * 다국어(한/영) 기반 모듈.
 *
 * 모든 다국어 텍스트는 `Localized<T>` = { ko: T, en: T } 형태로 저장하고,
 * 화면에서는 `const t = useT()` 로 받은 t() 하나만 통과시킨다.
 *
 *   const t = useT();
 *   <h1>{t(site.labName)}</h1>      // string
 *   {t(area.keywords).map(...)}     // string[] 도 동일하게 동작
 *
 * 언어 상태는 모듈 스코프 스토어에 두고 useSyncExternalStore 로 구독한다.
 * (서버는 항상 ko 로 렌더 → 하이드레이션 후 저장된 언어로 전환)
 */

import {
  useCallback,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

export const LANGS = ["ko", "en"] as const;
export type Lang = (typeof LANGS)[number];

/** 언어별 값 묶음. T 는 string, string[], 객체 등 무엇이든 가능. */
export type Localized<T = string> = { readonly [K in Lang]: T };

const STORAGE_KEY = "cpss-lang";
const DEFAULT_LANG: Lang = "ko";

/* ---------------- store ---------------- */

const listeners = new Set<() => void>();
let currentLang: Lang | null = null;

/** 저장된 값 → 브라우저 언어 → 기본값 순으로 결정 (클라이언트에서 최초 1회만) */
function resolveInitialLang(): Lang {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "ko" || saved === "en") return saved;
  } catch {
    /* 사생활 보호 모드 등에서 localStorage 접근이 막힐 수 있다 */
  }
  return window.navigator.language.toLowerCase().startsWith("ko") ? "ko" : "en";
}

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  return () => {
    listeners.delete(onChange);
  };
}

function getSnapshot(): Lang {
  currentLang ??= resolveInitialLang();
  return currentLang;
}

function getServerSnapshot(): Lang {
  return DEFAULT_LANG;
}

function writeLang(next: Lang) {
  if (currentLang === next) return;
  currentLang = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {
    /* 저장에 실패해도 현재 세션 전환은 그대로 동작한다 */
  }
  listeners.forEach((listener) => listener());
}

/* ---------------- hooks ---------------- */

export function useLanguage() {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return useMemo(
    () => ({
      lang,
      setLang: writeLang,
      toggle: () => writeLang(lang === "ko" ? "en" : "ko"),
    }),
    [lang]
  );
}

/** 현재 언어에 맞는 값을 꺼내는 함수를 돌려준다. */
export function useT() {
  const { lang } = useLanguage();
  return useCallback(<T,>(value: Localized<T>): T => value[lang], [lang]);
}

/* ---------------- provider ---------------- */

/**
 * 상태는 스토어가 들고 있으므로 Context 는 필요 없다.
 * 이 컴포넌트는 <html lang> 을 현재 언어와 동기화하는 역할만 한다.
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const { lang } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return <>{children}</>;
}
