import Link from "next/link";
import Divider from "@/components/ui/Divider";
import Eyebrow from "@/components/ui/Eyebrow";
import { palette as p } from "@/lib/palette";

const items = [
  {
    size: "250g",
    price: "KSh 650",
    note: "Pocket jar",
    img: "/jar-cream.jpg",
    bg: p.bg,
    dark: false,
    popular: false,
  },
  {
    size: "500g",
    price: "KSh 1,150",
    note: "The classic",
    img: "/jar-green.jpg",
    bg: "#0F2A21",
    dark: true,
    popular: true,
  },
  {
    size: "1kg",
    price: "KSh 2,100",
    note: "Family size",
    img: "/jar-black.jpg",
    bg: "#1A1410",
    dark: true,
    popular: false,
  },
] as const;

export default function Products() {
  return (
    <section id="our-honey" style={{ background: p.bg, color: p.ink, padding: "140px 0" }}>
      <div className="gb-container">
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <Eyebrow color={p.gold}>The Lineup</Eyebrow>
          <h2
            style={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
              fontWeight: 500,
              fontSize: "clamp(40px, 4.4vw, 64px)",
              lineHeight: 1.02,
              letterSpacing: "-.01em",
              margin: "20px 0 0",
            }}
          >
            Three jars. <em style={{ fontStyle: "italic", color: p.gold }}>One honey.</em>
          </h2>
        </div>

        <div className="gb-products-grid">
          {items.map((it) => (
            <article
              key={it.size}
              style={{
                background: it.bg,
                color: it.dark ? "#F4ECD8" : p.ink,
                border: `1px solid ${it.dark ? "rgba(244,236,216,.12)" : p.line}`,
                padding: "36px 28px 28px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                position: "relative",
                minHeight: 540,
              }}
            >
              {it.popular && (
                <div
                  style={{
                    position: "absolute",
                    top: 20,
                    right: 20,
                    fontFamily: "var(--font-inter), Inter, sans-serif",
                    fontSize: 10,
                    letterSpacing: ".18em",
                    textTransform: "uppercase",
                    color: p.gold,
                    border: `1px solid ${p.gold}`,
                    padding: "5px 12px",
                    borderRadius: 999,
                    whiteSpace: "nowrap",
                  }}
                >
                  Most loved
                </div>
              )}

              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <Divider color={p.gold} width={32} />
                <Eyebrow color={p.gold}>{it.note}</Eyebrow>
                <Divider color={p.gold} width={32} />
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                  fontWeight: 500,
                  fontSize: 56,
                  margin: "8px 0 0",
                  letterSpacing: "-.02em",
                  color: it.dark ? "#F4ECD8" : p.ink,
                }}
              >
                {it.size}
              </h3>

              <div
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "20px 0",
                  width: "100%",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={it.img}
                  alt={`GeeBee Honey ${it.size}`}
                  style={{
                    maxHeight: 280,
                    maxWidth: "85%",
                    objectFit: "contain",
                    filter: it.dark
                      ? "drop-shadow(0 20px 40px rgba(0,0,0,.5))"
                      : "drop-shadow(0 16px 32px rgba(15,42,33,.18))",
                  }}
                />
              </div>

              <div
                style={{
                  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontSize: 24,
                  color: p.gold,
                  marginBottom: 16,
                }}
              >
                {it.price}
              </div>

              <Link
                href="#order"
                style={{
                  width: "100%",
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                  fontSize: 12,
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  padding: "14px 0",
                  textAlign: "center",
                  border: `1px solid ${it.dark ? p.gold : p.ink}`,
                  color: it.dark ? p.gold : p.ink,
                  textDecoration: "none",
                  background: "transparent",
                  display: "block",
                }}
              >
                Add to order
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
