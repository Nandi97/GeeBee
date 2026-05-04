interface BeeMarkProps {
  size?: number;
  color?: string;
}

export default function BeeMark({ size = 28, color = "currentColor" }: BeeMarkProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <ellipse cx="20" cy="22" rx="6.5" ry="9" fill={color} />
      <path
        d="M13.5 22c0-4 0-6 6.5-6s6.5 2 6.5 6"
        stroke="#0F2A21"
        strokeWidth=".8"
        opacity=".25"
      />
      <path d="M20 14v16M16 16.5v11M24 16.5v11" stroke="#0F2A21" strokeWidth=".7" opacity=".35" />
      <ellipse cx="13" cy="17" rx="6" ry="3.5" fill={color} opacity=".55" transform="rotate(-25 13 17)" />
      <ellipse cx="27" cy="17" rx="6" ry="3.5" fill={color} opacity=".55" transform="rotate(25 27 17)" />
      <circle cx="20" cy="13" r="2.4" fill={color} />
      <path d="M19 11.5l-1.5-2M21 11.5l1.5-2" stroke={color} strokeWidth=".9" strokeLinecap="round" />
    </svg>
  );
}
