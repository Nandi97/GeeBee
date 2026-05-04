import Eyebrow from "@/components/ui/Eyebrow";
import { palette as p } from "@/lib/palette";

const places = [
  ["Healthy U", "Sarit Centre · Westlands", "Nairobi"],
  ["Zucchini Greengrocers", "Lavington Mall", "Nairobi"],
  ["Chandarana Foodplus", "Yaya Centre", "Nairobi"],
  ["Greenspoon", "Online · countrywide", "Delivery"],
  ["The Farmers' Market", "Karura · Saturdays", "Nairobi"],
  ["GeeBee Farm Shop", "Eldoret · by appointment", "Uasin Gishu"],
] as const;

export default function Stockists() {
  return (
    <section id="stockists" style={{ background: p.bg, color: p.ink, padding: "140px 0" }}>
      <div className="gb-container">
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: 56,
            gap: 40,
            flexWrap: "wrap",
          }}
        >
          <div>
            <Eyebrow color={p.gold}>Where to Buy</Eyebrow>
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
              Find us <em style={{ fontStyle: "italic", color: p.gold }}>nearby.</em>
            </h2>
          </div>
          <p
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontSize: 14,
              lineHeight: 1.6,
              color: p.inkSoft,
              maxWidth: 320,
            }}
          >
            Or skip the trip — we deliver across Nairobi within 24 hours, and countrywide via
            courier in 2–3 days.
          </p>
        </div>

        <div style={{ borderTop: `1px solid ${p.line}` }}>
          {places.map(([name, addr, region], i) => (
            <div
              key={name}
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr auto auto",
                gap: 32,
                alignItems: "center",
                padding: "26px 0",
                borderBottom: `1px solid ${p.line}`,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                  fontSize: 18,
                  fontStyle: "italic",
                  color: p.gold,
                  width: 32,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                  fontSize: 26,
                  fontWeight: 500,
                  letterSpacing: "-.01em",
                }}
              >
                {name}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                  fontSize: 14,
                  color: p.inkSoft,
                }}
              >
                {addr}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                  fontSize: 11,
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: p.gold,
                  opacity: 0.85,
                }}
              >
                {region}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
