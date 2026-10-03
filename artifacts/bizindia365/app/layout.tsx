import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BizIndia365",
  description: "Digital Business Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}