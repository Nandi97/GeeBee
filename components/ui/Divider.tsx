interface DividerProps {
  color?: string;
  width?: number;
}

export default function Divider({ color = "currentColor", width = 220 }: DividerProps) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, color, width, maxWidth: "100%" }}>
      <div style={{ flex: 1, height: 1, background: color, opacity: 0.45 }} />
      <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
        <rect x="2.5" y="2.5" width="5" height="5" transform="rotate(45 5 5)" fill={color} />
      </svg>
      <div style={{ flex: 1, height: 1, background: color, opacity: 0.45 }} />
    </div>
  );
}
