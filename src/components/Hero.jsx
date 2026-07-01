import { profile } from "../data/resumeData";
import EventStream from "./EventStream";

export default function Hero() {
  return (
    <section id="top" style={{ paddingTop: 80, borderBottom: "1px solid var(--border)" }}>
      <div
        className="container hero-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          gap: 56,
          alignItems: "center",
        }}
      >
        <div>
          <div className="eyebrow">status: available for opportunities</div>
          <h1
            className="mono"
            style={{
              fontSize: "clamp(36px, 5.2vw, 58px)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              marginBottom: 20,
            }}
          >
            {profile.name}
          </h1>
          <p
            style={{
              fontSize: "clamp(17px, 2vw, 20px)",
              color: "var(--text-muted)",
              maxWidth: 460,
              marginBottom: 12,
            }}
          >
            {profile.title} — {profile.tagline}
          </p>
          <p className="mono" style={{ fontSize: 13, color: "var(--text-dim)", marginBottom: 36 }}>
            {profile.location}
          </p>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a
              href="#projects"
              className="mono"
              style={{
                background: "var(--accent)",
                color: "var(--bg)",
                padding: "13px 24px",
                borderRadius: 6,
                fontWeight: 700,
                fontSize: 13.5,
              }}
            >
              view_projects()
            </a>
            <a
              href="#contact"
              className="mono"
              style={{
                border: "1px solid var(--border)",
                color: "var(--text)",
                padding: "13px 24px",
                borderRadius: 6,
                fontWeight: 600,
                fontSize: 13.5,
              }}
            >
              get_in_touch()
            </a>
          </div>
        </div>

        <EventStream />
      </div>

      <style>{`
        @media (max-width: 860px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
