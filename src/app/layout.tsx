import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apex-Meridian | Leading AI Technology Solutions",
  description: "Apex-Meridian delivers cutting-edge AI solutions across aviation, cybersecurity, education, and AGI development. Transform your industry with our advanced artificial intelligence platform.",
  keywords: "AI, artificial intelligence, aviation, cybersecurity, education, AGI, technology solutions",
  authors: [{ name: "Apex-Meridian" }],
  openGraph: {
    title: "Apex-Meridian | Leading AI Technology Solutions",
    description: "Transform your industry with cutting-edge AI solutions from Apex-Meridian",
    url: "https://www.apex-meridian.net",
    siteName: "Apex-Meridian",
    images: [
      {
        url: "/assets/logo_blue.png",
        width: 1200,
        height: 630,
        alt: "Apex-Meridian Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apex-Meridian | Leading AI Technology Solutions",
    description: "Transform your industry with cutting-edge AI solutions from Apex-Meridian",
    images: ["/assets/logo_blue.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/favicon.png" />
        <link rel="apple-touch-icon" href="/assets/logo.png" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
