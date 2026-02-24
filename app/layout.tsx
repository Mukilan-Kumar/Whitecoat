import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "WhiteCoat - Premium Real Estate for NRI Doctors",
  description: "Exclusive luxury property investments in India for NRI doctors. Curated premium real estate with complete transparency and dedicated support.",
  keywords: "NRI doctors, real estate India, luxury properties, medical professionals investment, premium homes India",
  authors: [{ name: "WhiteCoat" }],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  openGraph: {
    title: "WhiteCoat - Premium Real Estate for NRI Doctors",
    description: "Exclusive luxury property investments in India for NRI doctors",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "WhiteCoat - Premium Real Estate for NRI Doctors",
    description: "Exclusive luxury property investments in India for NRI doctors",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
