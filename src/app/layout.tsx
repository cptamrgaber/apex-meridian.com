import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/lib/auth-context";
import { LanguageProvider } from "@/lib/language-context";
import { ThemeProvider } from "@/lib/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "A  p  e  x  M  e  r  i  d  i  a  n | Leading AI Technology Solutions",
  description: "A  p  e  x  M  e  r  i  d  i  a  n delivers cutting-edge AI solutions across aviation, cybersecurity, education, and AGI development. Transform your industry with our advanced artificial intelligence platform.",
  keywords: "AI, artificial intelligence, aviation, cybersecurity, education, AGI, technology solutions",
  authors: [{ name: "A  p  e  x  M  e  r  i  d  i  a  n" }],
  openGraph: {
    title: "A  p  e  x  M  e  r  i  d  i  a  n | Leading AI Technology Solutions",
    description: "Transform your industry with cutting-edge AI solutions from A  p  e  x  M  e  r  i  d  i  a  n",
    url: "https://www.apex-meridian.com",
    siteName: "A  p  e  x  M  e  r  i  d  i  a  n",
    images: [
      {
        url: "/assets/A  p  e  x  M  e  r  i  d  i  a  nlogoicon.png",
        width: 1200,
        height: 630,
        alt: "A  p  e  x  M  e  r  i  d  i  a  n Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "A  p  e  x  M  e  r  i  d  i  a  n | Leading AI Technology Solutions",
    description: "Transform your industry with cutting-edge AI solutions from A  p  e  x  M  e  r  i  d  i  a  n",
    images: ["/assets/A  p  e  x  M  e  r  i  d  i  a  nlogoicon.png"],
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
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
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
        <link rel="icon" href="/A  p  e  x  M  e  r  i  d  i  a  nlogoicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/A  p  e  x  M  e  r  i  d  i  a  nlogoicon.png" />
        <link rel="shortcut icon" href="/A  p  e  x  M  e  r  i  d  i  a  nlogoicon.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>
            <AuthProvider>
              <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
                <Header />
                <main className="flex-grow">
                  {children}
                </main>
                <Footer />
              </div>
            </AuthProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
