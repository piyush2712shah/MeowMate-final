import 'bootstrap/dist/css/bootstrap.css'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MeowMates",
  description: "The one stop solution for dog adoption",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <main>
        {children}
        </main>
        <Footer/>
        </body>
    </html>
  );
}
