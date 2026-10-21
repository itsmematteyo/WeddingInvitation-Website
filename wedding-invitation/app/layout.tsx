import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Inter, Great_Vibes, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600"],
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-great-vibes",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Kelvin & Janine — December 29, 2026 | Wedding Invitation",
  description:
    "Together with our families, Kelvin Arellano and Janine Consulta joyfully invite you to celebrate the beginning of our forever. December 29, 2026 · San Pablo City.",
  keywords: ["Kelvin and Janine Wedding", "Wedding Invitation", "San Pablo Cathedral Church", "Golden Rich San Pablo"],
  openGraph: {
    title: "Kelvin & Janine — Wedding Celebration",
    description: "In God's Perfect Time · December 29, 2026",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${inter.variable} ${montserrat.variable} ${greatVibes.variable} scroll-smooth`}
    >
      <body className="bg-blush text-cocoa antialiased selection:bg-rose selection:text-white">
        {children}
      </body>
    </html>
  );
}
