"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/", label: "Início" },
  { href: "/questoes", label: "Questões" },
  { href: "/simulado", label: "Simulado" },
  { href: "/resumos", label: "Resumos" },
  { href: "/mapa", label: "Mapa" },
] as const;

export default function TopNav() {
  const pathname = usePathname();

  return (
    <nav className="top-nav" aria-label="Navegação principal">
      {NAV.map((item) => {
        const isActive =
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href);

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

