import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dazora Tech | Software Development Company",
  description: "Dazora Tech builds websites, mobile applications and custom software for businesses in Pakistan and worldwide. Founded in 2022 and based in Islamabad.",
  metadataBase: new URL("https://dazoratech.com"),
  openGraph: {
    title: "Dazora Tech | Ideas into digital impact",
    description: "Software, design and digital growth for ambitious businesses.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
