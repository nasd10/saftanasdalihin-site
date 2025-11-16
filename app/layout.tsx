import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// Setup font
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "Safta Nas | Smart Contract Developer",
  description: "Safta Nasdalihin's professional portfolio, a Smart Contract Developer specializing in secure and audited Solidity development across various blockchain platforms.",
  
  // === IMPLEMENTATION DYNAMIC FAVICON (NEW) ===
  icons: [
    {
      rel: 'icon',
      url: 'images/favicon-dark.png',
      media: '(prefers-color-scheme: light)',
    },
    {
      rel: 'icon',
      url: 'images/favicon-light.png',
      media: '(prefers-color-scheme: dark)',
    },
  ],
  // ============================================
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div>
            <div className="flex flex-col min-h-screen"> 
              <Navbar />
              <main className="container mx-auto px-4 py-8 grow"> 
                {children}
              </main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}