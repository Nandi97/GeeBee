import Eyebrow from "@/components/ui/Eyebrow";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { palette as p } from "@/lib/palette";

export default function About() {
  return (
    <section id="the-farm" style={{ background: p.bg, color: p.ink, padding: "140px 0" }}>
      <div
        className="gb-container"
        style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 80, alignItems: "center" }}
      >
        {/* Photo grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gridTemplateRows: "auto auto",
            gap: 16,
          }}
        >
          <div style={{ gridRow: "1 / span 2" }}>
            <ImagePlaceholder label="Apiary at dawn — wide" ratio="3 / 4.2" />
          </div>
          <ImagePlaceholder label="Honey pour close-up" ratio="1 / 1" />
          <ImagePlaceholder label="Hands · honeycomb" ratio="1 / 1" />
        </div>

        {/* Copy */}
        <div>
          <Eyebrow color={p.gold}>The Farm · Uasin Gishu</Eyebrow>
          <h2
            style={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
              fontWeight: 500,
              fontSize: "clamp(40px, 4.4vw, 64px)",
              lineHeight: 1.02,
              letterSpacing: "-.01em",
              margin: "20px 0 32px",
              color: p.ink,
            }}
          >
            One valley.
            <br />
            One family.
            <br />
            <em style={{ fontStyle: "italic", color: p.gold }}>Twelve hives to start.</em>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontSize: 16,
              lineHeight: 1.65,
              color: p.inkSoft,
              maxWidth: 520,
              marginBottom: 20,
            }}
          >
            GeeBee began in 2024 on a small farm outside Eldoret, where the highland air, the
            wildflowers, and the long Rift Valley afternoons give our honey its unmistakable amber
            depth.
          </p>
          <p
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontSize: 16,
              lineHeight: 1.65,
              color: p.inkSoft,
              maxWidth: 520,
              marginBottom: 36,
            }}
          >
            We don&apos;t blend, heat or hurry our honey. Every jar is filled slowly, sealed, and
            signed off — straight from our farm to your home.
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <ImagePlaceholder label="KM" ratio="1 / 1" style={{ width: 64, height: 64 }} />
            <div>
              <div
                style={{
                  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                  fontSize: 20,
                  fontStyle: "italic",
                }}
              >
                Kenneth Maina
              </div>
              <div
                style={{
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                  fontSize: 12,
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                  opacity: 0.6,
                }}
              >
                Beekeeper · Founder
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
