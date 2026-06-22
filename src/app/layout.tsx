import { type Metadata } from "next";
import { type ReactNode } from "react";
import logoCropped from "@/assets/logo-cropped.png";
import { Toaster } from "@/components/ui/sonner";
import "../styles.css";

export const metadata: Metadata = {
  title: "Eco South Partnership — Urban & Rural Planning Consultancy",
  description: "Reimagining cities, towns and villages — spatial planning, GIS, social engineering, and infrastructure across South Africa.",
  authors: [{ name: "Eco South Partnership" }],
  icons: {
    icon: logoCropped.src,
  },
  openGraph: {
    title: "Eco South Partnership",
    description: "Reimagining cities, towns and villages — spatial planning, GIS, social engineering, and infrastructure across South Africa.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
        />
      </head>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
