import { ImageResponse } from "next/og";
import { identity } from "@/lib/content";

export const alt = "Dhiraj Nirne — Product Manager";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
// Required under output: "export" (GitHub Pages build) — same as
// sitemap.ts/robots.ts, Next 16 errors without this explicit declaration.
export const dynamic = "force-static";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "96px",
          backgroundColor: "#0b0d12",
          backgroundImage:
            "radial-gradient(circle at 15% 15%, rgba(139,124,246,0.35), transparent 55%), radial-gradient(circle at 85% 85%, rgba(63,215,154,0.18), transparent 55%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 16,
              backgroundColor: "#8b7cf6",
              color: "#0b0d12",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            DN
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#8b92a3",
            }}
          >
            Bengaluru, India
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 700,
            color: "#f4f5f7",
            lineHeight: 1.1,
          }}
        >
          {identity.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 40,
            color: "#8b7cf6",
            marginTop: 20,
            fontWeight: 600,
          }}
        >
          Product Manager
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: "#8b92a3",
            marginTop: 32,
            maxWidth: 900,
          }}
        >
          {identity.positioningLine}
        </div>
      </div>
    ),
    { ...size }
  );
}
