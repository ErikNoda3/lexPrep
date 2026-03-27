import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export const runtime = "edge";

export const alt = `${SITE_NAME} — preparação para o ENAM`;

export const size = { width: 1200, height: 630 };

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #1c1917 0%, #292524 45%, #1c1917 100%)",
          color: "#fafaf9",
          fontFamily:
            'ui-sans-serif, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
          }}
        >
          {SITE_NAME}
        </div>
        <div
          style={{
            fontSize: 26,
            marginTop: 28,
            color: "#d6d3d1",
            maxWidth: 880,
            textAlign: "center",
            lineHeight: 1.35,
          }}
        >
          {SITE_TAGLINE}
        </div>
      </div>
    ),
    { ...size },
  );
}
