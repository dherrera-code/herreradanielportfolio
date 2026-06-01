import type { Metadata } from "next";
import { Geist, Geist_Mono, Hanken_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import TopNavbar from "@/components/TopNavbar";
import BottomFooter from "@/components/BottomFooter";
import NavbarV2 from "@/components/componentsV2/NavbarV2";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const hankenFont = Hanken_Grotesk({
  weight: '400',
  subsets: ["latin"]
})

export const jetBrainsFont = JetBrains_Mono({
  weight: '400',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Daniel Herrera",
  description: "His portfolio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={cn("font-sans", hankenFont.className)}>
    <head>
      
    </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased`}
      >
        {/* <TopNavbar /> */}
        <NavbarV2 />
        {children}
        <BottomFooter />
      </body>
    </html>
  );
}
