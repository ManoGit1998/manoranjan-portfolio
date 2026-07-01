import { experience } from "../data/resumeData";
import Reveal from "./Reveal";

function StatusBadge({ status }) {
  const isRunning = status === "RUNNING";
  return (
    <span
      className="mono"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontSize: 11.5,
        fontWeight: 700,
        letterSpacing: "0.05em",
        color: isRunning ? "var(--success)" : "var(--accent-2)",
        border: `1px solid ${isRunning ? "var(--success)" : "var(--accent-2)"}`,
        borderRadius: 4,
        padding: "3px 9px",
      }}
    >
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: isRunning ? "var(--success)" : "var(--accent-2)",
        }}
      />
      {status}
    </span>
  );
}

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <Reveal>
          <div className="eyebrow">deployment history</div>
          <h2 className="section-title">
            Experience<span>.log</span>
          </h2>
        </Reveal>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {experience.map((job, idx) => (
            <Reveal key={job.id} delay={idx * 100}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "180px 1fr",
                  gap: 32,
                  padding: "32px 0",
                  borderTop: idx === 0 ? "1px solid var(--border)" : "none",
                  borderBottom: "1px solid var(--border)",
                }}
                className="exp-row"
              >
                <div>
                  <div className="mono" style={{ fontSize: 13, color: "var(--text-dim)" }}>
                    {job.period}
                  </div>
                  <div className="mono" style={{ fontSize: 12, color: "var(--text-dim)", marginTop: 4 }}>
                    {job.location}
                  </div>
                  <div style={{ marginTop: 12 }}>
                    <StatusBadge status={job.status} />
                  </div>
                </div>

                <div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 2 }}>{job.role}</h3>
                  <div className="mono" style={{ fontSize: 13.5, color: "var(--accent)", marginBottom: 16 }}>
                    {job.company}
                  </div>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                    {job.logs.map((line, i) => (
                      <li
                        key={i}
                        style={{ display: "flex", gap: 10, color: "var(--text-muted)", fontSize: 14.5 }}
                      >
                        <span className="mono" style={{ color: "var(--accent)", flexShrink: 0 }}>
                          ›
                        </span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .exp-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
