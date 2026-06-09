import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-playfair-var",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
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
      className={`${cormorant.variable} ${dmSans.variable}`}
    >
      <body suppressHydrationWarning>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
