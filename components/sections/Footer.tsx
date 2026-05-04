import Link from "next/link";
import BeeMark from "@/components/ui/BeeMark";
import { palette as p } from "@/lib/palette";

const columns = [
  ["Shop", ["250g jar", "500g jar", "1kg jar", "Gift box"]],
  ["About", ["The farm", "Our process", "Stockists", "Sustainability"]],
  ["Reach us", ["WhatsApp", "Instagram", "TikTok", "Email"]],
] as const;

export default function Footer() {
  return (
    <footer
      style={{
        background: p.paper,
        color: p.inkSoft,
        padding: "64px 0 40px",
        borderTop: `1px solid ${p.line}`,
      }}
    >
      <div
        className="gb-container"
        style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48 }}
      >
        <div style={{ minWidth: 0 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 16,
              whiteSpace: "nowrap",
            }}
          >
            <BeeMark size={28} color={p.gold} />
            <span
              style={{
                fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                fontSize: 26,
                fontWeight: 500,
              }}
            >
              GeeBee Honey
            </span>
          </div>
          <p
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontSize: 13,
              lineHeight: 1.6,
              maxWidth: 320,
              opacity: 0.8,
            }}
          >
            Sourced from the heart of Uasin Gishu — a small family apiary committed to honey the
            way it should be.
          </p>
        </div>

        {columns.map(([title, links]) => (
          <div key={title}>
            <div
              style={{
                fontFamily: "var(--font-inter), Inter, sans-serif",
                fontSize: 11,
                letterSpacing: ".18em",
                textTransform: "uppercase",
                color: p.gold,
                opacity: 0.85,
                marginBottom: 18,
              }}
            >
              {title}
            </div>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: 10,
                fontFamily: "var(--font-inter), Inter, sans-serif",
                fontSize: 14,
              }}
            >
              {links.map((l) => (
                <li key={l}>
                  <Link href="#" style={{ color: "inherit", textDecoration: "none", opacity: 0.85 }}>
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div
        className="gb-container"
        style={{
          marginTop: 56,
          paddingTop: 24,
          borderTop: `1px solid ${p.line}`,
          display: "flex",
          justifyContent: "space-between",
          fontFamily: "var(--font-inter), Inter, sans-serif",
          fontSize: 12,
          opacity: 0.6,
        }}
      >
        <span>© 2026 GeeBee Honey Products · Eldoret, Kenya</span>
        <span>100% Pure · Raw · Unfiltered</span>
      </div>
    </footer>
  );
}
