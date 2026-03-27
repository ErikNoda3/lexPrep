import type { Metadata } from "next";
import "./globals.css";
import AppShell from "@/components/AppShell";
import SessionInit from "@/components/SessionInit";
import SessionProvider from "@/components/SessionProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "LexPrep — ENAM",
  description: "App de estudos jurídicos (Next.js + Postgres)",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=DM+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
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
