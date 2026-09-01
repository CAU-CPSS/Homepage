"use client";

import ErrorView from "@/components/layout/ErrorView";

/** 렌더링 중 발생한 오류를 잡는다. reset() 으로 해당 구간만 다시 그린다. */
export default function Error({ reset }: { error: Error; reset: () => void }) {
  return <ErrorView onRetry={reset} />;
}
