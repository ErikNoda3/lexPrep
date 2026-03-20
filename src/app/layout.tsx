import type { Metadata } from "next";
import "./globals.css";
import AppShell from "@/components/AppShell";
import Sidebar from "@/components/Sidebar";
import SessionInit from "@/components/SessionInit";

export const metadata: Metadata = {
  title: "LexPrep — ENAM",
  description: "App de estudos jurídicos (Next.js + Postgres)",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SessionInit />
        <AppShell sidebar={<Sidebar />}>{children}</AppShell>
      </body>
    </html>
  );
}
