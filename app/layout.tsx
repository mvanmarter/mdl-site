import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const sans = Inter({ variable: "--font-sans", subsets: ["latin"] });
const display = Fraunces({ variable: "--font-display", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Melanie de Leon — VP Marketing & Product Development",
  description:
    "Product marketing and growth leader: AI-driven GTM, PLG, lifecycle. Scaled $0 to 8-figure revenue, +47% MER. Open to VP Marketing / VP Product roles.",
  openGraph: {
    title: "Melanie de Leon — VP Marketing & Product Development",
    description:
      "AI-driven GTM · PLG & lifecycle · $0 to 8-figure revenue · Los Angeles",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="executive" suppressHydrationWarning>
      <body
        className={`${sans.variable} ${display.variable} min-h-full antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
