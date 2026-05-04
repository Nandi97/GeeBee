import Link from "next/link";
import BeeMark from "@/components/ui/BeeMark";
import { palette as p } from "@/lib/palette";

const links = ["Our Honey", "The Farm", "Process", "Stockists", "Order"];

export default function Nav() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(244,236,216,.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        color: p.onDark,
        borderBottom: "1px solid rgba(15,42,33,.1)",
      }}
    >
      <div
        className="gb-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 0",
          gap: 32,
        }}
      >
        <Link
          href="#top"
          style={{ display: "flex", alignItems: "center", gap: 10, color: "inherit", textDecoration: "none" }}
        >
          <BeeMark size={22} color={p.heroAccent} />
          <span
            style={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
              fontSize: 22,
              fontWeight: 500,
              letterSpacing: ".01em",
            }}
          >
            GeeBee{" "}
            <span
              style={{
                fontFamily: "var(--font-inter), Inter, sans-serif",
                fontSize: 10,
                letterSpacing: ".4em",
                opacity: 0.7,
                marginLeft: 4,
              }}
            >
              HONEY
            </span>
          </span>
        </Link>

        <div
          style={{
            display: "flex",
            gap: 28,
            fontFamily: "var(--font-inter), Inter, sans-serif",
            fontSize: 13,
            letterSpacing: ".06em",
          }}
        >
          {links.map((l) => (
            <Link
              key={l}
              href={`#${l.toLowerCase().replace(/\s+/g, "-")}`}
              style={{ color: "inherit", textDecoration: "none", opacity: 0.85 }}
            >
              {l}
            </Link>
          ))}
        </div>

        <Link
          href="#order"
          style={{
            fontFamily: "var(--font-inter), Inter, sans-serif",
            fontSize: 12,
            letterSpacing: ".14em",
            textTransform: "uppercase",
            padding: "10px 18px",
            border: `1px solid ${p.heroAccent}`,
            color: p.heroAccent,
            textDecoration: "none",
            borderRadius: 999,
            fontWeight: 500,
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          Order a jar
        </Link>
      </div>
    </nav>
  );
}
