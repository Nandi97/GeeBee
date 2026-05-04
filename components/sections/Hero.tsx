import Link from "next/link";
import Divider from "@/components/ui/Divider";
import Eyebrow from "@/components/ui/Eyebrow";
import { palette as p } from "@/lib/palette";

const stats = [
  ["Raw", "Never heated above hive temp"],
  ["Single-origin", "One farm, one valley"],
  ["Hand-bottled", "In small batches"],
] as const;

const marqueeItems = [
  "100% Pure Natural Honey",
  "·",
  "Straight from our farm",
  "·",
  "Sourced from the Heart of Uasin Gishu",
  "·",
  "Raw · Unfiltered · Pure Goodness",
  "·",
];

export default function Hero() {
  return (
    <section id="top" style={{ background: p.heroBg, color: p.ink, position: "relative", overflow: "hidden" }}>
      {/* honeycomb geometry */}
      <svg
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.05 }}
        aria-hidden="true"
      >
        <defs>
          <pattern id="honeycomb" x="0" y="0" width="56" height="48" patternUnits="userSpaceOnUse">
            <path d="M14 0 L42 0 L56 24 L42 48 L14 48 L0 24 Z" fill="none" stroke={p.heroAccent} strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#honeycomb)" />
      </svg>

      {/* two-column on desktop, single on mobile */}
      <div className="gb-container gb-hero-grid">
        {/* Left — copy */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 36 }}>
            <Divider color={p.heroAccent} width={80} />
            <Eyebrow color={p.heroAccent}>Est · 2024 · Est</Eyebrow>
            <Divider color={p.heroAccent} width={80} />
          </div>

          <h1
            style={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
              fontWeight: 500,
              fontSize: "clamp(52px, 6.4vw, 96px)",
              lineHeight: 0.98,
              letterSpacing: "-.01em",
              margin: 0,
            }}
          >
            Honey, the way
            <br />
            the highlands{" "}
            <em style={{ fontStyle: "italic", color: p.heroAccent }}>made it.</em>
          </h1>

          <p
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontSize: 17,
              lineHeight: 1.55,
              maxWidth: 480,
              margin: "32px 0 40px",
              opacity: 0.82,
            }}
          >
            Raw, unfiltered honey harvested from family apiaries deep in Uasin Gishu. Bottled by
            hand. Delivered fresh across Nairobi and beyond — straight from our farm to your home.
          </p>

          <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
            <Link
              href="#order"
              style={{
                fontFamily: "var(--font-inter), Inter, sans-serif",
                fontSize: 13,
                letterSpacing: ".14em",
                textTransform: "uppercase",
                padding: "16px 28px",
                background: p.heroAccent,
                color: p.bg,
                textDecoration: "none",
                borderRadius: 2,
                fontWeight: 600,
              }}
            >
              Order a jar →
            </Link>
            <Link
              href="#process"
              style={{
                fontFamily: "var(--font-inter), Inter, sans-serif",
                fontSize: 13,
                letterSpacing: ".14em",
                textTransform: "uppercase",
                padding: "16px 24px",
                color: "inherit",
                textDecoration: "none",
                opacity: 0.8,
                borderBottom: "1px solid rgba(15,42,33,.4)",
              }}
            >
              How it&apos;s made
            </Link>
          </div>

          <div
            style={{
              display: "flex",
              gap: 28,
              marginTop: 64,
              paddingTop: 28,
              borderTop: "1px solid rgba(15,42,33,.18)",
            }}
          >
            {stats.map(([title, sub]) => (
              <div key={title} style={{ flex: 1 }}>
                <div
                  style={{
                    fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                    fontSize: 22,
                    fontStyle: "italic",
                    color: p.heroAccent,
                    marginBottom: 4,
                  }}
                >
                  {title}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-inter), Inter, sans-serif",
                    fontSize: 12,
                    letterSpacing: ".04em",
                    opacity: 0.7,
                  }}
                >
                  {sub}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — jar: hidden on mobile via .gb-hero-jar */}
        <div
          className="gb-hero-jar"
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: 620,
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "min(560px, 90%)",
              aspectRatio: "1 / 1",
              borderRadius: "50%",
              background: `radial-gradient(circle at 50% 45%, ${p.heroAccent}33 0%, transparent 70%)`,
              filter: "blur(24px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "min(440px, 78%)",
              aspectRatio: "1 / 1",
              borderRadius: "50%",
              border: "1px solid rgba(15,42,33,.12)",
            }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/jar-green.jpg"
            alt="GeeBee Honey 500g jar"
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 460,
              height: "auto",
              mixBlendMode: "multiply",
              filter: "contrast(1.02) saturate(1.05)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "18%",
              left: "-4%",
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontSize: 11,
              letterSpacing: ".16em",
              textTransform: "uppercase",
              color: p.heroAccent,
              opacity: 0.9,
            }}
          >
            500g <span style={{ opacity: 0.5 }}>·</span> Glass
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "12%",
              right: "-2%",
              textAlign: "right",
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontSize: 11,
              letterSpacing: ".16em",
              textTransform: "uppercase",
              color: p.heroAccent,
              opacity: 0.9,
            }}
          >
            Uasin Gishu
            <br />
            <span style={{ opacity: 0.5, letterSpacing: ".24em" }}>0°31&apos;N · 35°16&apos;E</span>
          </div>
        </div>
      </div>

      {/* marquee strap */}
      <div
        style={{
          borderTop: "1px solid rgba(15,42,33,.15)",
          borderBottom: "1px solid rgba(15,42,33,.15)",
          padding: "18px 0",
          overflow: "hidden",
        }}
      >
        <div
          className="gb-hero-marquee"
          style={{
            display: "flex",
            gap: 56,
            fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontSize: 22,
            color: p.heroAccent,
            whiteSpace: "nowrap",
            animation: "gb-marquee 42s linear infinite",
          }}
        >
          {Array.from({ length: 3 }).flatMap((_, i) =>
            marqueeItems.map((s, j) => <span key={`${i}-${j}`}>{s}</span>)
          )}
        </div>
      </div>
    </section>
  );
}
