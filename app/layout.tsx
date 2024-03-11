import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/sections/navbar";

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
      <body className={cn(inter.className, "pt-20")}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
