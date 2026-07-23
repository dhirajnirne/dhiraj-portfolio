import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { AmbientBackground } from "@/components/shared/AmbientBackground";
import { CustomCursor } from "@/components/shared/CustomCursor";
import { Nav } from "@/components/nav/Nav";
import { Footer } from "@/components/shared/Footer";
import "./globals.css";

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const bodyFont = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const monoFont = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Dhiraj Nirne — Product Manager",
  description:
    "Dhiraj Nirne — Product Manager with 3+ years turning ambiguous problems into shipped product across civic tech, AI, fintech-scale operations, and consumer apps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}
    >
      <body className="min-h-screen bg-bg font-body text-text antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <AmbientBackground />
          <CustomCursor />
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <Nav />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
