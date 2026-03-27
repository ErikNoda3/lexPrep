import type { MetadataRoute } from "next";
import { getSiteUrl, SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  const base = getSiteUrl();
  return {
    name: SITE_NAME,
    short_name: "LexPrep",
    description: SITE_DESCRIPTION,
    start_url: base,
    display: "standalone",
    background_color: "#fafaf9",
    theme_color: "#a16207",
    lang: "pt-BR",
    orientation: "portrait-primary",
    icons: [
      {
        src: `${base}/icon`,
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
