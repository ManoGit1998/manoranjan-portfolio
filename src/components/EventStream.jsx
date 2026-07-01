import { useEffect, useState } from "react";
import { logLines } from "../data/resumeData";

function timestamp(offsetSeconds) {
  const d = new Date();
  d.setSeconds(d.getSeconds() - (logLines.length - offsetSeconds));
  return d.toTimeString().slice(0, 8);
}

export default function EventStream() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount >= logLines.length) return;
    const t = setTimeout(() => setVisibleCount((c) => c + 1), 420);
    return () => clearTimeout(t);
  }, [visibleCount]);

  return (
    <div
      className="mono"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: 8,
        overflow: "hidden",
        boxShadow: "0 20px 60px -20px rgba(0,0,0,0.5)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "10px 16px",
          borderBottom: "1px solid var(--border)",
          background: "var(--surface-2)",
        }}
      >
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#f56565" }} />
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#f6ad55" }} />
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#68d391" }} />
        <span style={{ marginLeft: 10, fontSize: 12, color: "var(--text-dim)" }}>
          production.log — tail -f
        </span>
      </div>
      <div style={{ padding: "18px 20px", minHeight: 220, fontSize: 13, lineHeight: 1.9 }}>
        {logLines.slice(0, visibleCount).map((line, i) => (
          <div key={i} style={{ display: "flex", gap: 10, color: "var(--text-muted)" }}>
            <span style={{ color: "var(--text-dim)", flexShrink: 0 }}>{timestamp(i)}</span>
            <span>
              {line.startsWith("[status]") ? (
                <span style={{ color: "var(--success)" }}>{line}</span>
              ) : (
                <span style={{ color: "var(--text)" }}>{line}</span>
              )}
            </span>
          </div>
        ))}
        {visibleCount < logLines.length && (
          <span
            className="mono"
            style={{
              display: "inline-block",
              width: 8,
              height: 15,
              background: "var(--accent)",
              animation: "blink 1s step-end infinite",
              marginTop: 4,
            }}
          />
        )}
      </div>
      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
