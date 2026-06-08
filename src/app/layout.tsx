import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { CursorGlow } from "./Components/CursorGlow"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sarthak Shukla | Portfolio",
  description: "Electrical Engineering Student at SGSITS portfolio platform showcasing AI/ML and data solutions.",
  icons: {
    icon: "/favicon.ico?v=1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative selection:bg-purple-500/30">
        {/* Placed right at top of body layer so it registers globally */}
        <CursorGlow />
        
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}