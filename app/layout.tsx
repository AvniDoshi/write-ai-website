import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "./components/SiteShell";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://writeai.center"),
  title: {
    default: "WRITE AI Center | Writing Education in the Age of AI",
    template: "%s | WRITE AI Center",
  },
  description:
    "Researching how generative AI can strengthen writing instruction, responsible AI use, and student learning.",
  icons: { icon: "/favicon.png" },
  openGraph: {
    type: "website",
    title: "WRITE AI",
    description: "Improving writing education in the age of AI",
    images: [{ url: "/og.png", width: 1733, height: 909, alt: "WRITE AI — Improving writing education in the age of AI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WRITE AI",
    description: "Improving writing education in the age of AI",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
