import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { LanguageProvider } from "@/components/LanguageContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cafe Cursor | Вземете безплатен кредит",
  description: "Регистрирайте се, за да получите безплатен кредит за Cursor IDE. Общност на разработчици.",
  keywords: ["cursor", "ide", "кредит", "разработчици", "програмиране", "credit", "developers"],
  authors: [{ name: "Alexander Gekov" }],
  openGraph: {
    title: "Cafe Cursor | Get your free credit",
    description: "Register to get your free Cursor IDE credit",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bg" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
