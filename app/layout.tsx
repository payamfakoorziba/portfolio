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
    <html lang="en" className="bg-[#3F3F45] text-white">
      <body className={cn(inter.className, "pt-20")}>
        {/* Grid background */}
        <div className="absolute bg-grid-white/10 top-0 inset-x-0 bottom-1/3 -mt-20">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_left,transparent_10%,black)] bg-[#3F3F45] " />
        </div>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
