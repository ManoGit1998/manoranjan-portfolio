import { skillGroups } from "../data/resumeData";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <Reveal>
          <div className="eyebrow">dependency manifest</div>
          <h2 className="section-title">
            Skills<span>.json</span>
          </h2>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          {skillGroups.map((group, idx) => (
            <Reveal key={group.label} delay={idx * 70}>
              <div
                style={{
                  border: "1px solid var(--border)",
                  borderRadius: 10,
                  padding: 22,
                  background: "var(--surface)",
                }}
              >
                <div className="mono" style={{ fontSize: 12.5, color: "var(--accent)", marginBottom: 14 }}>
                  "{group.label}": [
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, paddingLeft: 8 }}>
                  {group.items.map((item) => (
                    <span
                      key={item}
                      style={{
                        fontSize: 13.5,
                        color: "var(--text-muted)",
                        background: "var(--surface-2)",
                        borderRadius: 5,
                        padding: "5px 10px",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mono" style={{ fontSize: 12.5, color: "var(--accent)", marginTop: 14 }}>
                  ]
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
