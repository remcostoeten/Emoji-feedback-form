"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/app.css";
import Providers from "@/components/providers";
import { Feedback } from "@/components/FeedbackLogic";
import LanguageDropdown from "@/components/misc/LanguageDropdown";
import LanguageWrapper from "@/components/shells/LanguageWrapper";
import { useTranslation } from "react-i18next";
import { Header } from "@/components/shells/Header";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { i18n } = useTranslation();

  return (
    <html>
      <body className={`${inter.className} bg-body`}>
        <Providers>
          <LanguageWrapper>
            <Header />
            {children}
          </LanguageWrapper>
        </Providers>
      </body>
    </html>
  );
}
