import type { Metadata, Viewport } from "next";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import localfont from "next/font/local";
import Nav from "@/components/layout/Nav";
import { Montserrat } from 'next/font/google';
import StyledComponentsRegistry from "./StyledComponentsRegistry";
import ScrollToTop from "@/components/ui/ScrollToTop";

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
  display: "optional",
  variable: "--font-pretendard",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "optional",
  variable: "--font-montserrat",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable} ${montserrat.variable}`}>
        <StyledComponentsRegistry>
          <ScrollToTop />
          <main>
            <Nav />
            {children}
            <Footer />
          </main>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}