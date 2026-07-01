import { profile } from "../data/resumeData";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" style={{ borderBottom: "none" }}>
      <div className="container">
        <Reveal>
          <div className="eyebrow">POST /contact</div>
          <h2 className="section-title">
            Let's build<span> something reliable.</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: 16, maxWidth: 520, marginBottom: 40 }}>
            Open to backend engineering roles and freelance systems work. Fastest way to reach me is email.
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 56 }}>
            <a
              href={`mailto:${profile.email}`}
              className="mono"
              style={{
                background: "var(--accent)",
                color: "var(--bg)",
                padding: "14px 26px",
                borderRadius: 6,
                fontWeight: 700,
                fontSize: 14,
              }}
            >
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="mono"
              style={{
                border: "1px solid var(--border)",
                color: "var(--text)",
                padding: "14px 26px",
                borderRadius: 6,
                fontWeight: 600,
                fontSize: 14,
              }}
            >
              {profile.phone}
            </a>
          </div>

          <div
            className="mono"
            style={{
              display: "flex",
              gap: 24,
              fontSize: 13.5,
              color: "var(--text-dim)",
            }}
          >
            <a
              href="https://github.com/ManoGit1998"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--text-muted)" }}
            >
              github ↗
            </a>

            <a
              href="https://www.linkedin.com/in/manoranjan-nayak-b55169130/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--text-muted)" }}
            >
              linkedin ↗
            </a>
          </div>
        </Reveal>
      </div>

      <footer style={{ borderTop: "1px solid var(--border)", marginTop: 80, padding: "28px 0" }}>
        <div className="container mono" style={{ fontSize: 12, color: "var(--text-dim)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>status: 200 OK</span>
        </div>
      </footer>
    </section>
  );
}
