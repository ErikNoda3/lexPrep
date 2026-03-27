import type { Metadata } from "next";
import "./globals.css";
import AppShell from "@/components/AppShell";
import JsonLd from "@/components/JsonLd";
import SessionInit from "@/components/SessionInit";
import SessionProvider from "@/components/SessionProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/next";
import { getSiteUrl, SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE } from "@/lib/site";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${SITE_NAME} — Súmulas, questões e simulado para o ENAM`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: siteUrl }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "education",
  keywords: [
    "ENAM",
    "Exame Nacional da Magistratura",
    "súmulas STF",
    "súmulas STJ",
    "súmulas TST",
    "questões ENAM",
    "simulado ENAM",
    "estudos jurídicos",
    "magistratura",
    "LexPrep",
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — preparação para o ENAM`,
    description: SITE_TAGLINE,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — preparação para o Exame Nacional da Magistratura`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — preparação para o ENAM`,
    description: SITE_TAGLINE,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/icon", type: "image/svg+xml" }],
    apple: [{ url: "/icon", type: "image/svg+xml" }],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
    { media: "(prefers-color-scheme: dark)", color: "#1c1917" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=DM+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <JsonLd />
        <ThemeProvider>
          <SessionProvider>
            <SessionInit />
            <AppShell>{children}</AppShell>
            <Analytics />
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
