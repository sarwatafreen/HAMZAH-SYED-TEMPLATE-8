import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import TopHeader from "./Components/TopHeader";
// import AllProducts from "./Components/AllProducts";
import Allproductdata from "./Components/Allproductdata";
// import Allproductdata from "./Components/Allproductdata";


// @/ =scr
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
       >  
       <TopHeader />
        <Header />
        
          
        {children}
        {/* <AllProducts /> */}
        < Allproductdata />
        <Footer />
      </body>
    </html>
  );
}
