import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";

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
      <body className="font-roboto bg-background antialiased">
        <div className="mx-auto max-w-lg pr-4 sm:pr-0 md:pt-[calc(100svh*0.25)]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
