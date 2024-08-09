import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pemberton Landscaping",
  description: "Landscaping construction, installations, and maintenance in the sea to sky corridor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Pemberton Landscaping</title>
        <meta name="description" content="Landscaping construction, installations, and maintenance in the sea to sky corridor."/>
        <meta property="og:title" content="Pemberton Landscaping" />
        <meta property="og:description" content="Landscaping construction, installations, and maintenance in the sea to sky corridor."/>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
