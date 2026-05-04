import { CSSProperties } from "react";

interface EyebrowProps {
  children: React.ReactNode;
  color?: string;
}

export default function Eyebrow({ children, color = "currentColor" }: EyebrowProps) {
  const style: CSSProperties = {
    fontFamily: "var(--font-inter), Inter, sans-serif",
    fontSize: 11,
    letterSpacing: "0.32em",
    textTransform: "uppercase",
    fontWeight: 500,
    color,
    opacity: 0.85,
  };
  return <span style={style}>{children}</span>;
}
