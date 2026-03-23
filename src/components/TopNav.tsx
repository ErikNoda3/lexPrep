"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  {
    href: "/",
    label: "Início",
    activePrefixes: ["/"],
  },
  {
    href: "/area-estudo",
    label: "Área de Estudo",
    activePrefixes: ["/area-estudo", "/resumos", "/sumulas"],
  },
  {
    href: "/area-pratica",
    label: "Área de Prática",
    activePrefixes: ["/area-pratica", "/questoes", "/simulado", "/mapa"],
  },
] as const;

export default function TopNav() {
  const pathname = usePathname();

  return (
    <nav className="top-nav" aria-label="Navegação principal">
      {NAV.map((item) => {
        const isActive = item.activePrefixes.some(
          (p) => pathname === p || pathname.startsWith(p + "/"),
        );

        return (
          <Link
            key={item.href}
            href={item.href}
            className={isActive ? "active" : undefined}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

