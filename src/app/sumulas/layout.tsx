import type { Metadata } from "next";
import type { ReactNode } from "react";
import { privateAppRobots } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Súmulas STF, STJ e TST",
  description:
    "Consulte súmulas dos tribunais superiores para revisão objetiva na preparação ao ENAM.",
  robots: privateAppRobots,
  alternates: { canonical: "/sumulas" },
};

export default function SumulasLayout({ children }: { children: ReactNode }) {
  return children;
}
