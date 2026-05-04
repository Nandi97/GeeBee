import { CSSProperties } from "react";

interface ImagePlaceholderProps {
  label: string;
  ratio?: string;
  tone?: "warm" | "dark";
  style?: CSSProperties;
}

export default function ImagePlaceholder({
  label,
  ratio = "4 / 3",
  tone = "warm",
  style,
}: ImagePlaceholderProps) {
  const stripeFg = tone === "dark" ? "rgba(255,255,255,.08)" : "rgba(15,42,33,.14)";
  const stripeBg = tone === "dark" ? "#162A22" : "#E5D6AE";
  const textColor = tone === "dark" ? "rgba(244,236,216,.6)" : "rgba(15,42,33,.65)";

  return (
    <div
      style={{
        aspectRatio: ratio,
        width: "100%",
        background: `repeating-linear-gradient(135deg, ${stripeBg} 0 18px, ${stripeFg} 18px 19px)`,
        border: "1px solid rgba(15,42,33,.18)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: textColor,
        fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace",
        fontSize: 11,
        letterSpacing: ".08em",
        textTransform: "uppercase",
        ...style,
      }}
    >
      {label}
    </div>
  );
}
