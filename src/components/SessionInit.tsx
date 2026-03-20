"use client";

import { useEffect } from "react";

export default function SessionInit() {
  useEffect(() => {
    // Gera o cookie anônimo de sessão no backend (HttpOnly).
    fetch("/api/session/init").catch(() => {});
  }, []);

  return null;
}

