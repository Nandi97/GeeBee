import Eyebrow from "@/components/ui/Eyebrow";
import { palette as p } from "@/lib/palette";

const facts = [
  ["Antioxidants", "Naturally occurring polyphenols, kept intact by cold processing."],
  ["Soothing", "A spoonful at night has been a Kenyan kitchen remedy for generations."],
  ["Energy", "Real, complex sugars — the kind your body actually wants in the morning."],
  ["Nothing added", "No corn syrup, no glucose, no anti-crystallisation tricks. Just honey."],
] as const;

export default function Health() {
  return (
    <section
      style={{
        background: p.deepBg,
        color: p.deepInk,
        padding: "140px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <svg
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.06 }}
        aria-hidden="true"
      >
        <defs>
          <pattern id="hc2" x="0" y="0" width="56" height="48" patternUnits="userSpaceOnUse">
            <path
              d="M14 0 L42 0 L56 24 L42 48 L14 48 L0 24 Z"
              fill="none"
              stroke={p.deepAccent}
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hc2)" />
      </svg>

      <div className="gb-container" style={{ position: "relative" }}>
        <div className="gb-health-grid">
          <div>
            <Eyebrow color={p.deepAccent}>Why Raw</Eyebrow>
            <h2
              style={{
                fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                fontWeight: 500,
                fontSize: "clamp(40px, 4.4vw, 64px)",
                lineHeight: 1.02,
                letterSpacing: "-.01em",
                margin: "20px 0 24px",
              }}
            >
              The honey,
              <br />
              <em style={{ fontStyle: "italic", color: p.deepAccent }}>and only the honey.</em>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-inter), Inter, sans-serif",
                fontSize: 15,
                lineHeight: 1.65,
                opacity: 0.8,
                maxWidth: 360,
              }}
            >
              Pasteurisation makes honey shelf-stable and pretty. It also strips out most of what
              makes honey worth eating. We skip it.
            </p>
          </div>

          <div className="gb-health-facts">
            {facts.map(([title, desc], i) => (
              <div
                key={title}
                className="gb-health-fact"
                style={{
                  padding: "28px 28px 28px 0",
                  borderTop: "1px solid rgba(244,236,216,.18)",
                  borderRight: i % 2 === 0 ? "1px solid rgba(244,236,216,.18)" : "none",
                  paddingLeft: i % 2 === 1 ? 28 : 0,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                    fontSize: 26,
                    fontStyle: "italic",
                    color: p.deepAccent,
                    marginBottom: 10,
                  }}
                >
                  {title}
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-inter), Inter, sans-serif",
                    fontSize: 14,
                    lineHeight: 1.6,
                    opacity: 0.82,
                    margin: 0,
                  }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
