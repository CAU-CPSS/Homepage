"use client";

import styled, { keyframes } from 'styled-components';
import { useRef, useCallback } from 'react';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Char = styled.span<{ $delay: number; $duration: number }>`
  display: inline-block;
  opacity: 0;
  white-space: pre;
  animation: ${fadeUp} ${({ $duration }) => $duration}s
    cubic-bezier(0.19, 1, 0.22, 1)
    ${({ $delay }) => $delay}ms both;
`;

interface SplitTextProps {
  text: string;
  delay?: number;
  duration?: number;
  startDelay?: number;
  /** false 면 글자를 쪼개지 않고 그대로 한 번에 보여준다 */
  animate?: boolean;
  onLetterAnimationComplete?: () => void;
}

const SplitText = ({
  text,
  delay = 50,
  duration = 1.25,
  startDelay = 0,
  animate = true,
  onLetterAnimationComplete,
}: SplitTextProps) => {
  const chars = text.split('');
  const completedRef = useRef(0);

  const handleAnimEnd = useCallback(() => {
    completedRef.current += 1;
    if (completedRef.current === chars.length && onLetterAnimationComplete) {
      onLetterAnimationComplete();
    }
  }, [chars.length, onLetterAnimationComplete]);

  if (!animate) return <>{text}</>;

  return (
    <>
      {chars.map((char, i) => (
        <Char
          key={i}
          $delay={startDelay + i * delay}
          $duration={duration}
          onAnimationEnd={handleAnimEnd}
        >
          {char}
        </Char>
      ))}
    </>
  );
};

export default SplitText;