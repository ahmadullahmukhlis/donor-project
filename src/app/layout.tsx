"use client";

import { useEffect, useState } from "react";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PreLoader from "@/components/Common/PreLoader";
import ToasterContext from "./api/contex/ToasetContex";
import { TranslationProvider } from "@/components/context/TranslationContext.js";

import "../styles/index.css";
import "../styles/prism-vsc-dark-plus.css";

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html suppressHydrationWarning={true} className="!scroll-smooth" lang="en">
      <head />
      <body>
        {loading ? (
          <PreLoader />
        ) : (
          <SessionProvider>
            <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
              <TranslationProvider>
                
                  <Header />
                  {children}
                  <Footer />
                  <ScrollToTop />
               
              </TranslationProvider>
            </ThemeProvider>
          </SessionProvider>
        )}
      </body>
    </html>
  );
}
