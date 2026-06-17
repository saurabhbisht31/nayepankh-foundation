import { useEffect, useState } from "react";

function Hero({ darkMode }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const fade = {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(30px)",
    transition: "opacity 0.7s ease, transform 0.7s ease",
  };

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh", display: "flex", alignItems: "center",
        padding: "120px 5% 80px",
        background: darkMode ? "#111" : "#FAFAF8",
        transition: "background 0.3s",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center", width: "100%" }}>
        
        <div style={{ ...fade }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#E1F5EE", color: "#0F6E56", padding: "5px 14px", borderRadius: 100, fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.5px", marginBottom: "1.5rem" }}>
            ✦ Empowering Youth Since 2019
          </div>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "3.2rem", lineHeight: 1.15, letterSpacing: "-1px", marginBottom: "1.25rem", color: darkMode ? "#fff" : "#1a1a1a" }}>
            Give Wings to{" "}
            <em style={{ fontStyle: "normal", color: "#1D9E75" }}>Every</em>{" "}
            Dream
          </h1>
          <p style={{ fontSize: "1.05rem", color: darkMode ? "#aaa" : "#666", lineHeight: 1.75, marginBottom: "2rem", maxWidth: 440 }}>
            NayePankh Foundation works with underprivileged youth across India, providing education, mentorship, and opportunity to those who need it most.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button onClick={() => scrollTo("volunteer")} style={{ background: "#1D9E75", color: "#fff", border: "none", padding: "13px 28px", borderRadius: 100, fontSize: "0.9rem", fontWeight: 600, cursor: "pointer" }}>
              Become a Volunteer
            </button>
            <button onClick={() => scrollTo("programs")} style={{ background: "transparent", color: "#1D9E75", border: "1.5px solid #1D9E75", padding: "12px 28px", borderRadius: 100, fontSize: "0.9rem", fontWeight: 600, cursor: "pointer" }}>
              Our Programs
            </button>
          </div>
          <div style={{ display: "flex", gap: "2rem", marginTop: "2.5rem", paddingTop: "2rem", borderTop: `1px solid ${darkMode ? "#2a2a2a" : "#e8e8e5"}` }}>
            {[["5000+", "Lives impacted"], ["200+", "Volunteers"], ["18", "Cities covered"]].map(([num, label]) => (
              <div key={label}>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "2rem", color: "#0F6E56" }}>{num}</h3>
                <p style={{ fontSize: "0.8rem", color: darkMode ? "#aaa" : "#666", fontWeight: 500, marginTop: 2 }}>{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ ...fade, transitionDelay: "0.2s" }}>
          <div style={{ background: darkMode ? "#1a1a1a" : "#fff", borderRadius: 20, padding: 28, boxShadow: "0 20px 60px rgba(0,0,0,0.1)", marginBottom: 12 }}>
            <div style={{ width: "100%", height: 220, borderRadius: 12, background: "linear-gradient(135deg,#9FE1CB,#1D9E75)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3rem" }}>🌱</div>
            <div style={{ paddingTop: 18 }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#1D9E75", letterSpacing: "0.5px" }}>Featured Initiative</div>
              <div style={{ fontWeight: 600, fontSize: "1.05rem", margin: "6px 0 4px", color: darkMode ? "#fff" : "#1a1a1a" }}>Education for All Campaign 2026</div>
              <div style={{ fontSize: "0.875rem", color: darkMode ? "#aaa" : "#666" }}>Providing free resources and mentorship to 1,000 students this year</div>
            </div>
          </div>
          <div style={{ background: darkMode ? "#1a1a1a" : "#fff", borderRadius: 14, padding: "18px 20px", boxShadow: "0 8px 30px rgba(0,0,0,0.08)", display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 44, height: 44, background: "#E1F5EE", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem", flexShrink: 0 }}>🎓</div>
            <div>
              <div style={{ fontSize: "0.75rem", color: darkMode ? "#aaa" : "#666" }}>Certificates issued</div>
              <div style={{ fontWeight: 700, fontSize: "1rem", color: darkMode ? "#fff" : "#1a1a1a" }}>500+ Students recognized</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;