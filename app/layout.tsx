import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Header from "@/components/header";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daniel Hachac - Portfolio",
  description: "Daniel Hachac's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Navbar />
        <Header />
        {children}
      </body>
    </html>
  );
}
