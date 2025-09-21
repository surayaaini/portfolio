// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display, Merriweather } from "next/font/google";
import CustomCursor from "@/components/CustomCursor"; // 👈 import your cursor

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
  variable: "--font-playfair",
});

const merrie = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-merri",
});

export const metadata: Metadata = {
  title: "Suraya Aini — Portfolio",
  description: "Portfolio & Movie Diary",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${merrie.className} bg-primary text-black antialiased`}>
        <CustomCursor /> {/* 👈 this makes the cursor apply sitewide */}
        {children}
      </body>
    </html>
  );
}
