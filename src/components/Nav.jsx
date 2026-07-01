import { useEffect, useState } from "react";

const links = [
  { path: "/about", label: "about", href: "#about" },
  { path: "/experience", label: "experience", href: "#experience" },
  { path: "/projects", label: "projects", href: "#projects" },
  { path: "/skills", label: "skills", href: "#skills" },
  { path: "/contact", label: "contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: scrolled ? "rgba(10,15,28,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "background 0.3s ease, border-color 0.3s ease",
      }}
    >
      <nav
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 72,
        }}
      >
        <a href="#top" className="mono" style={{ fontWeight: 700, fontSize: 15, color: "var(--text)" }}>
          <span style={{ color: "var(--accent)" }}>&gt;</span> manoranjan<span style={{ color: "var(--accent)" }}>_</span>
        </a>

        <div
          className="mono desktop-links"
          style={{ display: "flex", gap: 28, fontSize: 13.5 }}
        >
          {links.map((l) => (
            <a
              key={l.path}
              href={l.href}
              style={{ color: "var(--text-muted)", transition: "color 0.2s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              {l.path}
            </a>
          ))}
        </div>

        <button
          className="mobile-toggle mono"
          onClick={() => setOpen(!open)}
          style={{
            display: "none",
            background: "none",
            border: "1px solid var(--border)",
            borderRadius: 4,
            color: "var(--text)",
            padding: "6px 10px",
            fontSize: 13,
          }}
        >
          {open ? "close" : "menu"}
        </button>
      </nav>

      {open && (
        <div
          className="mono"
          style={{
            borderTop: "1px solid var(--border)",
            background: "var(--bg)",
            padding: "16px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {links.map((l) => (
            <a key={l.path} href={l.href} onClick={() => setOpen(false)} style={{ color: "var(--text-muted)", fontSize: 14 }}>
              {l.path}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 720px) {
          .desktop-links { display: none !important; }
          .mobile-toggle { display: inline-block !important; }
        }
      `}</style>
    </header>
  );
}
