import type { Metadata } from "next";
import "./globals.css";

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
      <body className="font-roboto antialiased">{children}</body>
    </html>
  );
}
