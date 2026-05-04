import BeeMark from "@/components/ui/BeeMark";
import Eyebrow from "@/components/ui/Eyebrow";
import { palette as p } from "@/lib/palette";

const steps = [
  ["01", "Tend", "Our hives sit among wild eucalyptus and sunflower fields. The bees do the rest."],
  ["02", "Harvest", "Frames are pulled by hand at peak season and brought back the same afternoon."],
  ["03", "Strain", "We cold-strain through cloth — no heat, no fining, nothing added or removed."],
  ["04", "Bottle", "Poured into glass, capped, labelled, and signed off in small numbered batches."],
] as const;

export default function Process() {
  return (
    <section id="process" style={{ background: p.paper, color: p.ink, padding: "140px 0", position: "relative" }}>
      <div className="gb-container">
        <div className="gb-process-header">
          <div>
            <Eyebrow color={p.gold}>How It&apos;s Made</Eyebrow>
            <h2
              style={{
                fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                fontWeight: 500,
                fontSize: "clamp(40px, 4.4vw, 64px)",
                lineHeight: 1.02,
                letterSpacing: "-.01em",
                margin: "20px 0 0",
                maxWidth: 720,
              }}
            >
              Four steps. <em style={{ fontStyle: "italic", color: p.gold }}>No shortcuts.</em>
            </h2>
          </div>
          {/* hidden on mobile via .gb-process-header-sub */}
          <p
            className="gb-process-header-sub"
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontSize: 14,
              lineHeight: 1.6,
              color: p.inkSoft,
              maxWidth: 320,
              opacity: 0.8,
            }}
          >
            From the hive to the jar in under 48 hours, with as little in between as we can manage.
          </p>
        </div>

        <div className="gb-process-grid">
          {steps.map(([n, title, desc], i) => (
            <div
              key={n}
              className="gb-process-cell"
              style={{
                padding: "32px 28px 36px",
                borderRight: i < steps.length - 1 ? `1px solid ${p.line}` : "none",
                display: "flex",
                flexDirection: "column",
                gap: 18,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span
                  style={{
                    fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                    fontSize: 36,
                    color: p.gold,
                    fontStyle: "italic",
                  }}
                >
                  {n}
                </span>
                <BeeMark size={22} color={p.gold} />
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                  fontSize: 28,
                  fontWeight: 500,
                  margin: 0,
                  letterSpacing: "-.01em",
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                  fontSize: 14,
                  lineHeight: 1.6,
                  color: p.inkSoft,
                  margin: 0,
                }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
