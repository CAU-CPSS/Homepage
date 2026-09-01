import type { Metadata, Viewport } from "next";
import localfont from "next/font/local";
import { Montserrat } from "next/font/google";

import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import StyledComponentsRegistry from "./StyledComponentsRegistry";
import { LanguageProvider } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "CAU CPSS Lab",
  description:
    "중앙대학교 사이버물리시스템 보안 연구실 — CPS & Safety, Physical AI, AI Security & Privacy",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const pretendard = localfont({
  src: "./fonts/PretendardVariable.woff2",
  display: "optional",
  variable: "--font-pretendard",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "optional",
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable} ${montserrat.variable}`}>
        <StyledComponentsRegistry>
          <LanguageProvider>
            <ScrollToTop />
            <Nav />
            <main>{children}</main>
            <Footer />
          </LanguageProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
