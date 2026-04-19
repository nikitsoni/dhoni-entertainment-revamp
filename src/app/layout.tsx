import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

const syne = Syne({
  variable: "--font-playfair-var",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-dm-sans-var",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dhoni Entertainment — Mind Over Matter",
    template: "%s — Dhoni Entertainment",
  },
  description:
    "Dhoni Entertainment is a production company co-founded by MS Dhoni and Sakshi Singh Dhoni, creating meaningful stories across films, web series, documentaries, and short films.",
  openGraph: {
    title: "Dhoni Entertainment — Mind Over Matter",
    description:
      "Creating meaningful stories across films, web series, documentaries, and short films.",
    siteName: "Dhoni Entertainment",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${inter.variable}`}
    >
      <body suppressHydrationWarning>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
