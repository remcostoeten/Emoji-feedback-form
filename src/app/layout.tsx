import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/app.css";
import Providers from "@/components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-body`}>
        <Providers>
          {" "}
          {children}
          <nav className="flex fixed top-12 gap-4 left-4">
            <a href="/">Home </a>
            <a href="/test">Test page</a>
          </nav>
        </Providers>
      </body>
    </html>
  );
}
