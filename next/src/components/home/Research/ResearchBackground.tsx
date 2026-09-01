"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  baseVx: number;
  baseVy: number;
}

const PARTICLE_COLOR  = "0, 180, 255";
const LINE_COLOR      = "0, 160, 230";
const ACCENT_COLOR    = "0, 229, 255";
const BG_COLOR        = "#060d1a";

const MAX_DIST        = 140;
const MOUSE_REPEL_R   = 110;
const MOUSE_REPEL_F   = 0.018;

export default function ResearchBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isMobile = window.innerWidth < 768;
    /* 기존 밀도(데스크톱 1920x900 에 110개)를 면적 기준으로 환산 */
    const DENSITY = isMobile ? 1.9e-4 : 6.4e-5;
    const particleCount = () =>
      Math.max(60, Math.min(320, Math.round(W * H * DENSITY)));

    let W = 0;
    let H = 0;
    let particles: Particle[] = [];
    let mouseX = -9999;
    let mouseY = -9999;
    let raf = 0;

    const resize = () => {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width  = W * Math.min(window.devicePixelRatio, 2);
      canvas.height = H * Math.min(window.devicePixelRatio, 2);
      ctx.scale(Math.min(window.devicePixelRatio, 2), Math.min(window.devicePixelRatio, 2));
    };

    const initParticles = () => {
      particles = Array.from({ length: particleCount() }, () => {
        const speed = 0.18 + Math.random() * 0.28;
        const angle = Math.random() * Math.PI * 2;
        const vx = Math.cos(angle) * speed;
        const vy = Math.sin(angle) * speed;
        return {
          x: Math.random() * W,
          y: Math.random() * H,
          vx,
          vy,
          baseVx: vx,
          baseVy: vy,
          radius: Math.random() < 0.15 ? 2.8 + Math.random() * 1.4 : 1.2 + Math.random() * 1.2,
          opacity: 0.4 + Math.random() * 0.6,
        };
      });
    };

    resize();
    initParticles();

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    const onMouseLeave = () => {
      mouseX = -9999;
      mouseY = -9999;
    };
    const onTouchMove = (e: TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.touches[0].clientX - rect.left;
      mouseY = e.touches[0].clientY - rect.top;
    };
    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    const onResize = () => {
      resize();
      if (particles.length !== particleCount()) {
        initParticles();
        return;
      }
      particles.forEach((p) => {
        p.x = Math.min(p.x, W);
        p.y = Math.min(p.y, H);
      });
    };
    window.addEventListener("resize", onResize);

    const draw = () => {
      raf = requestAnimationFrame(draw);

      ctx.fillStyle = BG_COLOR;
      ctx.fillRect(0, 0, W, H);

      particles.forEach((p) => {
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < MOUSE_REPEL_R && dist > 0) {
          const force = (MOUSE_REPEL_R - dist) / MOUSE_REPEL_R;
          p.vx += (dx / dist) * force * MOUSE_REPEL_F * 60;
          p.vy += (dy / dist) * force * MOUSE_REPEL_F * 60;
        }

        p.vx += (p.baseVx - p.vx) * 0.03;
        p.vy += (p.baseVy - p.vy) * 0.03;

        const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (spd > 2.5) {
          p.vx = (p.vx / spd) * 2.5;
          p.vy = (p.vy / spd) * 2.5;
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -20) p.x = W + 20;
        if (p.x > W + 20) p.x = -20;
        if (p.y < -20) p.y = H + 20;
        if (p.y > H + 20) p.y = -20;

        const nearMouse = dist < MOUSE_REPEL_R * 0.7;
        const color = nearMouse ? ACCENT_COLOR : PARTICLE_COLOR;
        const r = nearMouse ? p.radius * 1.4 : p.radius;

        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${p.opacity})`;
        ctx.fill();

        if (p.radius > 2.5) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, r * 2.8, 0, Math.PI * 2);
          const grd = ctx.createRadialGradient(p.x, p.y, r * 0.5, p.x, p.y, r * 2.8);
          grd.addColorStop(0, `rgba(${color}, 0.15)`);
          grd.addColorStop(1, `rgba(${color}, 0)`);
          ctx.fillStyle = grd;
          ctx.fill();
        }
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist > MAX_DIST) continue;

          const lineOpacity = (1 - dist / MAX_DIST) * 0.45;

          const aDist = Math.sqrt((a.x - mouseX) ** 2 + (a.y - mouseY) ** 2);
          const bDist = Math.sqrt((b.x - mouseX) ** 2 + (b.y - mouseY) ** 2);
          const nearLine = aDist < MOUSE_REPEL_R || bDist < MOUSE_REPEL_R;
          const finalOp = nearLine ? Math.min(lineOpacity * 2.2, 0.85) : lineOpacity;
          const lColor = nearLine ? ACCENT_COLOR : LINE_COLOR;

          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(${lColor}, ${finalOp})`;
          ctx.lineWidth = nearLine ? 0.9 : 0.55;
          ctx.stroke();
        }
      }
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        display: "block",
      }}
    />
  );
}