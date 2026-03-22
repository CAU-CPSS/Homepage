"use client";

import { useEffect, useRef } from "react";
import styled from "styled-components";

const Canvas = styled.canvas`
  display: block;
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const ROADS = [
  { axis: "h" as const, pos: 0.38 },
  { axis: "h" as const, pos: 0.72 },
  { axis: "v" as const, pos: 0.28 },
  { axis: "v" as const, pos: 0.62 },
  { axis: "v" as const, pos: 0.88 },
];
const ROAD_W = 38;

type Car = {
  x: number; y: number; vx: number; vy: number;
  w: number; h: number; axis: "h" | "v"; dir: number;
  type: "ego" | "other"; color: string;
  scanR: number; scanMax: number; scanAlpha: number;
  scanTimer: number; detected: Car[]; lidarAngle: number;
};

type Ctx2D = CanvasRenderingContext2D & {
  roundRect: (x: number, y: number, w: number, h: number, r: number) => void;
};

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")! as Ctx2D;
    const safeCanvas = canvas;
    let W = 0, H = 0, dpr = 1;
    let cars: Car[] = [];
    let animId: number;

    const rr = (a: number, b: number) => a + Math.random() * (b - a);

    function resize() {
      dpr = window.devicePixelRatio || 1;
      const rect = safeCanvas.getBoundingClientRect();
      safeCanvas.width = rect.width * dpr;
      safeCanvas.height = rect.height * dpr;
      W = rect.width;
      H = rect.height;
      initCars();
    }

    function initCars() {
      cars = [];
      ROADS.filter(r => r.axis === "h").forEach(road => {
        const y = road.pos * H;
        for (let i = 0; i < Math.floor(W / 220) + 2; i++) {
          const dir = Math.random() < 0.5 ? 1 : -1;
          const colors = ["#00d4ff", "#4488ff", "#22ffaa"];
          cars.push({
            x: Math.random() * W, y: y + dir * -8,
            vx: dir * rr(0.6, 1.4), vy: 0,
            axis: "h", dir,
            w: rr(22, 30), h: rr(11, 15),
            type: Math.random() < 0.3 ? "ego" : "other",
            color: colors[Math.floor(Math.random() * colors.length)],
            scanR: 0, scanMax: rr(55, 100), scanAlpha: 0,
            scanTimer: Math.random() * 120, detected: [], lidarAngle: 0,
          });
        }
      });
      ROADS.filter(r => r.axis === "v").forEach(road => {
        const x = road.pos * W;
        for (let i = 0; i < Math.floor(H / 200) + 2; i++) {
          const dir = Math.random() < 0.5 ? 1 : -1;
          const colors = ["#00d4ff", "#4488ff", "#22ffaa"];
          cars.push({
            x: x + dir * -8, y: Math.random() * H,
            vx: 0, vy: dir * rr(0.5, 1.2),
            axis: "v", dir,
            w: rr(11, 15), h: rr(22, 30),
            type: Math.random() < 0.25 ? "ego" : "other",
            color: colors[Math.floor(Math.random() * colors.length)],
            scanR: 0, scanMax: rr(50, 90), scanAlpha: 0,
            scanTimer: Math.random() * 120, detected: [], lidarAngle: 0,
          });
        }
      });
    }

    function hex2rgb(hex: string) {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `${r},${g},${b}`;
    }

    function drawRoads() {
      ROADS.forEach(road => {
        if (road.axis === "h") {
          const y = road.pos * H;
          ctx.fillStyle = "rgba(20,40,70,0.55)";
          ctx.fillRect(0, y - ROAD_W / 2, W, ROAD_W);
          ctx.strokeStyle = "rgba(255,255,255,0.12)";
          ctx.lineWidth = 0.8;
          ctx.beginPath(); ctx.moveTo(0, y - ROAD_W / 2); ctx.lineTo(W, y - ROAD_W / 2); ctx.stroke();
          ctx.beginPath(); ctx.moveTo(0, y + ROAD_W / 2); ctx.lineTo(W, y + ROAD_W / 2); ctx.stroke();
          ctx.strokeStyle = "rgba(255,255,255,0.18)";
          ctx.lineWidth = 0.6;
          ctx.setLineDash([18, 14]);
          ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
          ctx.setLineDash([]);
        } else {
          const x = road.pos * W;
          ctx.fillStyle = "rgba(20,40,70,0.55)";
          ctx.fillRect(x - ROAD_W / 2, 0, ROAD_W, H);
          ctx.strokeStyle = "rgba(255,255,255,0.12)";
          ctx.lineWidth = 0.8;
          ctx.beginPath(); ctx.moveTo(x - ROAD_W / 2, 0); ctx.lineTo(x - ROAD_W / 2, H); ctx.stroke();
          ctx.beginPath(); ctx.moveTo(x + ROAD_W / 2, 0); ctx.lineTo(x + ROAD_W / 2, H); ctx.stroke();
          ctx.strokeStyle = "rgba(255,255,255,0.18)";
          ctx.lineWidth = 0.6;
          ctx.setLineDash([18, 14]);
          ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
          ctx.setLineDash([]);
        }
      });
    }

    function drawGrid() {
      ctx.strokeStyle = "rgba(0,140,255,0.045)";
      ctx.lineWidth = 0.5;
      for (let x = 0; x < W; x += 52) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
      }
      for (let y = 0; y < H; y += 52) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
      }
    }

    function drawCar(car: Car) {
      const { x, y, w, h, color, type, axis, dir } = car;
      ctx.save();
      ctx.shadowColor = color;
      ctx.shadowBlur = type === "ego" ? 14 : 7;
      ctx.strokeStyle = color;
      ctx.lineWidth = type === "ego" ? 1.2 : 0.7;
      ctx.fillStyle = type === "ego" ? color : "rgba(30,60,110,0.85)";
      ctx.beginPath();
      ctx.roundRect(x - w / 2, y - h / 2, w, h, 3);
      ctx.fill(); ctx.stroke();

      const lightColor = dir === 1 ? "rgba(255,240,180,0.9)" : "rgba(255,80,80,0.8)";
      if (axis === "h") {
        const lx = dir === 1 ? x + w / 2 - 2 : x - w / 2 + 2;
        [-h / 3, h / 3].forEach(dy => {
          ctx.beginPath(); ctx.arc(lx, y + dy, 2, 0, Math.PI * 2);
          ctx.fillStyle = lightColor; ctx.fill();
        });
      } else {
        const ly = dir === 1 ? y + h / 2 - 2 : y - h / 2 + 2;
        [-w / 3, w / 3].forEach(dx => {
          ctx.beginPath(); ctx.arc(x + dx, ly, 2, 0, Math.PI * 2);
          ctx.fillStyle = lightColor; ctx.fill();
        });
      }
      ctx.restore();
    }

    function drawLidar(car: Car) {
      if (car.scanAlpha <= 0) return;
      const { x, y, scanR, scanAlpha, color, lidarAngle } = car;
      const rgb = hex2rgb(color);
      ctx.save();
      const sweep = Math.PI * 0.7;
      const sa = lidarAngle - sweep / 2;
      ctx.beginPath(); ctx.moveTo(x, y);
      ctx.arc(x, y, scanR, sa, sa + sweep); ctx.closePath();
      ctx.fillStyle = `rgba(${rgb},${scanAlpha * 0.13})`;
      ctx.fill();
      ctx.beginPath(); ctx.moveTo(x, y);
      ctx.lineTo(x + Math.cos(lidarAngle) * scanR, y + Math.sin(lidarAngle) * scanR);
      ctx.strokeStyle = color; ctx.lineWidth = 0.8;
      ctx.globalAlpha = scanAlpha * 0.6; ctx.stroke();
      ctx.globalAlpha = 1;
      ctx.beginPath(); ctx.arc(x, y, scanR, 0, Math.PI * 2);
      ctx.strokeStyle = color; ctx.lineWidth = 0.4;
      ctx.globalAlpha = scanAlpha * 0.25; ctx.stroke();
      ctx.globalAlpha = 1;
      ctx.restore();
    }

    function drawDetection(car: Car) {
      car.detected.forEach(other => {
        const dx = other.x - car.x, dy = other.y - car.y;
        if (Math.sqrt(dx * dx + dy * dy) > car.scanMax * 1.1) return;
        ctx.save();
        ctx.beginPath(); ctx.moveTo(car.x, car.y); ctx.lineTo(other.x, other.y);
        ctx.strokeStyle = car.color; ctx.lineWidth = 0.5;
        ctx.globalAlpha = 0.22; ctx.setLineDash([4, 6]); ctx.stroke();
        ctx.setLineDash([]); ctx.globalAlpha = 0.4;
        ctx.strokeStyle = car.color; ctx.lineWidth = 0.8;
        ctx.strokeRect(other.x - other.w / 2 - 4, other.y - other.h / 2 - 4, other.w + 8, other.h + 8);
        ctx.globalAlpha = 1; ctx.restore();
      });
    }

    function tick() {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);
      drawGrid();
      drawRoads();

      cars.forEach(car => {
        car.x += car.vx; car.y += car.vy;
        if (car.x < -60) car.x = W + 60;
        if (car.x > W + 60) car.x = -60;
        if (car.y < -60) car.y = H + 60;
        if (car.y > H + 60) car.y = -60;
        car.lidarAngle += 0.04;
        car.scanTimer--;
        if (car.scanTimer <= 0) {
          car.scanTimer = rr(80, 200); car.scanR = 0; car.scanAlpha = 1;
        }
        if (car.scanAlpha > 0) {
          car.scanR = Math.min(car.scanR + 1.4, car.scanMax);
          if (car.scanR >= car.scanMax) car.scanAlpha = Math.max(0, car.scanAlpha - 0.025);
        }
        car.detected = cars.filter(o => {
          if (o === car) return false;
          const dx = o.x - car.x, dy = o.y - car.y;
          return Math.sqrt(dx * dx + dy * dy) < car.scanMax * 0.9;
        });
      });

      cars.forEach(drawLidar);
      cars.filter(c => c.type === "ego").forEach(drawDetection);
      cars.forEach(drawCar);

      animId = requestAnimationFrame(tick);
    }

    const ro = new ResizeObserver(resize);
    ro.observe(safeCanvas);
    resize();
    tick();

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return <Canvas ref={canvasRef} />;
}