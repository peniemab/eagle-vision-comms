import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import NewsletterPopup from "@/components/NewsletterPopup";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Eagle Vision Comms DRC | Agence de Communication Premium",
  description:
    "Bien faire et faire savoir - Démarquez-vous. Eagle Vision Comms DRC est votre agence de communication, production audiovisuelle et stratégie digitale à Kinshasa, RDC.",
  keywords: [
    "communication",
    "agence",
    "Kinshasa",
    "RDC",
    "Congo",
    "production audiovisuelle",
    "branding",
    "marketing digital",
    "photographie",
    "vidéographie",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body
        className={`${outfit.variable} ${inter.variable} antialiased bg-eagle-black text-white`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
        <NewsletterPopup />
      </body>
    </html>
  );
}
