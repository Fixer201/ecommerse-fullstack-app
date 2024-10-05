import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });

import "../globals.css";
import { cn } from "@/lib/utils";
import { Providers } from "@/app/providers";
import NavBar from "@/components/navbar/NavBar";
import SmoothScrolling from "@/components/SmoothScrolling";
import Footer from "@/components/footer/footer";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Noble Homes International",
  description: "Greatest real estate agency in the world",
};

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={cn("className: debug-screens", montserrat.className)}>
        <NavBar />
        <SmoothScrolling>
          <Providers>{children}</Providers>
        </SmoothScrolling>
        <Footer />
      </body>
    </html>
  );
}
