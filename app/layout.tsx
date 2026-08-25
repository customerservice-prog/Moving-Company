import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Moving Company | Syracuse & Central New York Movers",
    template: "%s | Moving Company",
  },
  description:
    "Get an instant moving estimate, book online, and track your move from start to finish. Licensed, insured, local crews serving Syracuse and Central New York.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
    );
}
