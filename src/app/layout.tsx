import type { Metadata } from "next";
import "./globals.css";
import { SITE } from "@/lib/utils";
import { PublicHeader } from "@/components/public-header";
import { PublicFooter } from "@/components/public-footer";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Recruitment & Managed Staffing`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "remote talent",
    "staffing partner",
    "recruitment",
    "managed staffing",
    "offshore hiring",
    "candidate sourcing",
    "contractor management",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    title: `${SITE.name} — Recruitment & Managed Staffing`,
    description: SITE.description,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Recruitment & Managed Staffing`,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-[100dvh] flex-col">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <PublicHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <PublicFooter />
      </body>
    </html>
  );
}
