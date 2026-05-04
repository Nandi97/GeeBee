"use client";

import { useState } from "react";
import Eyebrow from "@/components/ui/Eyebrow";
import { palette as p } from "@/lib/palette";

type FormState = {
  name: string;
  phone: string;
  size: string;
  qty: number;
  area: string;
  notes: string;
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px 0",
  fontSize: 16,
  fontFamily: "var(--font-inter), Inter, sans-serif",
  color: p.deepInk,
  background: "transparent",
  border: "none",
  borderBottom: "1px solid rgba(244,236,216,.3)",
  outline: "none",
};

const labelStyle: React.CSSProperties = {
  fontFamily: "var(--font-inter), Inter, sans-serif",
  fontSize: 11,
  letterSpacing: ".18em",
  textTransform: "uppercase",
  color: p.deepAccent,
  opacity: 0.8,
  marginBottom: 4,
};

const selectArrow: React.CSSProperties = {
  ...inputStyle,
  appearance: "none",
  backgroundImage: `linear-gradient(45deg, transparent 50%, ${p.deepAccent} 50%), linear-gradient(135deg, ${p.deepAccent} 50%, transparent 50%)`,
  backgroundPosition: `calc(100% - 14px) 22px, calc(100% - 9px) 22px`,
  backgroundSize: "5px 5px, 5px 5px",
  backgroundRepeat: "no-repeat",
};

const contactItems = [
  ["WhatsApp", "0712 959 747"],
  ["Email", "info@geebeehoney.com"],
  ["Address", "P.O. Box 30100 – 1378, Eldoret"],
] as const;

export default function Order() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    size: "500g",
    qty: 1,
    area: "Nairobi",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const update =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setForm((f) => ({ ...f, [key]: e.target.value }));
    };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="order" style={{ background: p.deepBg, color: p.deepInk, padding: "140px 0" }}>
      <div className="gb-container gb-order-grid">
        {/* Left — info */}
        <div>
          <Eyebrow color={p.deepAccent}>Order Direct</Eyebrow>
          <h2
            style={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
              fontWeight: 500,
              fontSize: "clamp(40px, 4.4vw, 64px)",
              lineHeight: 1.02,
              letterSpacing: "-.01em",
              margin: "20px 0 32px",
            }}
          >
            From our farm,
            <br />
            <em style={{ fontStyle: "italic", color: p.deepAccent }}>to your door.</em>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontSize: 15,
              lineHeight: 1.65,
              opacity: 0.82,
              maxWidth: 380,
              marginBottom: 48,
            }}
          >
            Tell us what you&apos;d like and we&apos;ll confirm your order on WhatsApp within the
            hour. M-Pesa on delivery.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontSize: 14,
            }}
          >
            {contactItems.map(([key, val]) => (
              <div
                key={key}
                style={{
                  display: "grid",
                  gridTemplateColumns: "100px 1fr",
                  gap: 16,
                  paddingBottom: 14,
                  borderBottom: "1px solid rgba(244,236,216,.12)",
                }}
              >
                <span style={{ ...labelStyle, marginBottom: 0 }}>{key}</span>
                <span>{val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {submitted && (
            <div
              style={{
                padding: "16px 20px",
                border: `1px solid ${p.deepAccent}`,
                fontFamily: "var(--font-inter), Inter, sans-serif",
                fontSize: 14,
                color: p.deepAccent,
                background: "rgba(225,177,74,.08)",
                borderRadius: 2,
              }}
            >
              ✓ Thanks {form.name || "friend"} — we&apos;ll WhatsApp you shortly.
            </div>
          )}

          <div className="gb-form-row-2">
            <div>
              <div style={labelStyle}>Your name</div>
              <input
                required
                value={form.name}
                onChange={update("name")}
                style={inputStyle}
                placeholder="Wanjiku"
              />
            </div>
            <div>
              <div style={labelStyle}>Phone</div>
              <input
                required
                value={form.phone}
                onChange={update("phone")}
                style={inputStyle}
                placeholder="07xx xxx xxx"
              />
            </div>
          </div>

          <div className="gb-form-row-3">
            <div>
              <div style={labelStyle}>Jar size</div>
              <select aria-label="Jar size" value={form.size} onChange={update("size")} style={selectArrow}>
                <option style={{ color: "#000" }}>250g</option>
                <option style={{ color: "#000" }}>500g</option>
                <option style={{ color: "#000" }}>1kg</option>
              </select>
            </div>
            <div>
              <div style={labelStyle}>Qty</div>
              <input
                aria-label="Quantity"
                type="number"
                min="1"
                value={form.qty}
                onChange={update("qty")}
                style={inputStyle}
              />
            </div>
            <div>
              <div style={labelStyle}>Delivery area</div>
              <select aria-label="Delivery area" value={form.area} onChange={update("area")} style={selectArrow}>
                <option style={{ color: "#000" }}>Nairobi</option>
                <option style={{ color: "#000" }}>Eldoret · Pickup</option>
                <option style={{ color: "#000" }}>Countrywide · Courier</option>
              </select>
            </div>
          </div>

          <div>
            <div style={labelStyle}>Notes (optional)</div>
            <input
              value={form.notes}
              onChange={update("notes")}
              style={inputStyle}
              placeholder="Gift wrap? Delivery time?"
            />
          </div>

          <button
            type="submit"
            style={{
              marginTop: 16,
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontSize: 13,
              letterSpacing: ".16em",
              textTransform: "uppercase",
              padding: "20px 28px",
              background: p.deepAccent,
              color: p.deepBg,
              border: "none",
              borderRadius: 2,
              fontWeight: 600,
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              whiteSpace: "nowrap",
              gap: 16,
              width: "100%",
            }}
          >
            <span>Send order via WhatsApp</span>
            <span style={{ flexShrink: 0 }}>→</span>
          </button>
        </form>
      </div>
    </section>
  );
}
