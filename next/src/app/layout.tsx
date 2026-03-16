import type { Metadata, Viewport } from "next";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import localfont from "next/font/local";
import Nav from "@/components/layout/Nav";
import { Montserrat } from 'next/font/google';

export const metadata: Metadata = {
  title: "CAU CPSS Lab @ CAU",
  description: "중앙대학교 사이버물리시스템 보안 연구실",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const pretendard = localfont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  variable: "--font-pretendard",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${montserrat.className}` + ` ${pretendard.className}`}>
        <main>
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}