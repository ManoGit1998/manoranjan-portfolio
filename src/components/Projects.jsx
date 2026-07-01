import { projects } from "../data/resumeData";
import Reveal from "./Reveal";

function StatusPill({ status }) {
  const color = status === "production" ? "var(--success)" : "var(--accent-2)";
  return (
    <span
      className="mono"
      style={{
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.04em",
        color,
        textTransform: "uppercase",
      }}
    >
      ● {status}
    </span>
  );
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <Reveal>
          <div className="eyebrow">service manifest</div>
          <h2 className="section-title">
            Projects<span>.yaml</span>
          </h2>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 24,
          }}
        >
          {projects.map((p, idx) => (
            <Reveal key={p.id} delay={idx * 100}>
              <div
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: 10,
                  padding: 28,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "border-color 0.25s ease, transform 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent-dim)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, lineHeight: 1.35, maxWidth: "80%" }}>{p.name}</h3>
                  <StatusPill status={p.status} />
                </div>

                <p style={{ color: "var(--text-muted)", fontSize: 14.5, marginBottom: 18, flexGrow: 0 }}>
                  {p.description}
                </p>

                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8, marginBottom: 22 }}>
                  {p.highlights.map((h, i) => (
                    <li key={i} style={{ display: "flex", gap: 8, fontSize: 13.5, color: "var(--text-muted)" }}>
                      <span style={{ color: "var(--accent)", flexShrink: 0 }}>▸</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ marginTop: "auto", display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="mono"
                      style={{
                        fontSize: 11.5,
                        color: "var(--text-dim)",
                        border: "1px solid var(--border)",
                        borderRadius: 4,
                        padding: "4px 8px",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
