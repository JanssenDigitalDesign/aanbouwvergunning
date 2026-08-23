import { ImageResponse } from "next/og";

// Generated from this site's own BrandIcon (see components/BrandMark.tsx)
// so the favicon matches the header mark and brand palette exactly,
// instead of every site sharing one generic icon.
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#16120f",
          color: "#c1652f",
          borderRadius: 7,
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 19V10L11 4.5L19 10V19" stroke="currentColor" strokeWidth="1.7" />
      <path d="M3 19h16" stroke="currentColor" strokeWidth="1.7" />
      <path d="M19 13h2a1.5 1.5 0 0 1 1.5 1.5V19H19" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1.4 1.6" />
        </svg>
      </div>
    ),
    size
  );
}
