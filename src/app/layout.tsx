"use client";

import { Providers } from "./providers";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollTop from '@/components/ScrollTop';
import { Inter } from "next/font/google";
import "@/styles/style.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-light dark:bg-dark ${inter.className}`}>
        <Providers>
          <Header/>
            {children}
          <Footer/>
          <ScrollTop/>
        </Providers>
      </body>
    </html>
  );
}
