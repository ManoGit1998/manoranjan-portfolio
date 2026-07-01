import { education, certifications, achievements } from "../data/resumeData";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <Reveal>
          <div className="eyebrow">config</div>
          <h2 className="section-title">
            About<span>.md</span>
          </h2>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
          }}
          className="about-grid"
        >
          <Reveal>
            <div style={{ border: "1px solid var(--border)", borderRadius: 10, padding: 26, background: "var(--surface)", height: "100%" }}>
              <div className="mono" style={{ fontSize: 12, color: "var(--accent)", marginBottom: 14, letterSpacing: "0.04em" }}>
                EDUCATION
              </div>
              <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 6 }}>{education.degree}</h3>
              <p style={{ color: "var(--text-muted)", fontSize: 14.5, marginBottom: 4 }}>{education.school}</p>
              <p className="mono" style={{ color: "var(--text-dim)", fontSize: 12.5 }}>
                {education.period} · {education.location} · {education.score}
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div style={{ border: "1px solid var(--border)", borderRadius: 10, padding: 26, background: "var(--surface)", height: "100%" }}>
              <div className="mono" style={{ fontSize: 12, color: "var(--accent)", marginBottom: 14, letterSpacing: "0.04em" }}>
                CERTIFICATIONS
              </div>
              {certifications.map((c) => (
                <div key={c.name} style={{ marginBottom: 14 }}>
                  <h3 style={{ fontSize: 15.5, fontWeight: 700, marginBottom: 4 }}>{c.name}</h3>
                  <p style={{ color: "var(--text-muted)", fontSize: 13.5 }}>{c.issuer}</p>
                </div>
              ))}
              <div className="mono" style={{ fontSize: 12, color: "var(--accent)", margin: "18px 0 10px", letterSpacing: "0.04em" }}>
                ACHIEVEMENTS
              </div>
              {achievements.map((a, i) => (
                <p key={i} style={{ color: "var(--text-muted)", fontSize: 13.5, display: "flex", gap: 8 }}>
                  <span style={{ color: "var(--accent-2)" }}>★</span>
                  <span>{a}</span>
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
