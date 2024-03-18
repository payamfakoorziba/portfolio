import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/sections/navbar";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Payam Fakoorziba",
  description: "Web designer and developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#3F3F45] text-white scroll-smooth">
      <body className={cn(inter.className)}>
        <Navbar />
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
