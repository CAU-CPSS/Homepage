"use client";

/**
 * 루트 레이아웃 자체가 실패했을 때 쓰이는 최후의 화면.
 * 레이아웃을 대체하므로 html/body 를 직접 그려야 하고,
 * styled-components 레지스트리도 없으므로 인라인 스타일만 쓴다.
 */
export default function GlobalError({ reset }: { error: Error; reset: () => void }) {
  return (
    <html lang="ko">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "24px",
          background: "#1a1a1a",
          color: "#ffffff",
          fontFamily:
            "Pretendard, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        }}
      >
        <p
          style={{
            fontSize: "0.9rem",
            fontWeight: 700,
            letterSpacing: "0.16em",
            color: "rgba(255,255,255,0.35)",
            margin: "0 0 26px",
          }}
        >
          CPSS Lab
        </p>
        <h1 style={{ fontSize: "2.2rem", fontWeight: 650, margin: 0 }}>
          서버 점검중입니다.
        </h1>
        <p
          style={{
            marginTop: "14px",
            fontSize: "0.92rem",
            color: "rgba(255,255,255,0.5)",
          }}
        >
          The site is temporarily unavailable. Please try again later.
        </p>
        <button
          type="button"
          onClick={reset}
          style={{
            marginTop: "32px",
            padding: "10px 20px",
            borderRadius: "999px",
            border: "none",
            background: "#ffffff",
            color: "#12205a",
            fontSize: "0.8rem",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          다시 시도
        </button>
      </body>
    </html>
  );
}
