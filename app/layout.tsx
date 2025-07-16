import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/cn";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "sjam.studio",
  description: "Sam's website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.variable, "antialiased")}>{children}</body>
    </html>
  );
}
