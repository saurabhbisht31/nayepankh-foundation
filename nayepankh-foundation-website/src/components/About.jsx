import useScrollAnimation from "../hooks/useScrollAnimation";

function About({ darkMode }) {
  const { ref, visible } = useScrollAnimation();

  const fade = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(40px)",
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
  });

  const values = ["📚 Education First", "🤝 Community Driven", "💡 Youth Led", "🌍 Pan-India Reach"];

  return (
    <section id="about" ref={ref} style={{ padding: "100px 5%", background: darkMode ? "#0d0d0d" : "#fff", transition: "background 0.3s" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#1D9E75", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "0.75rem", ...fade(0) }}>Who We Are</div>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "2.4rem", letterSpacing: "-0.5px", marginBottom: "3rem", color: darkMode ? "#fff" : "#1a1a1a", ...fade(0.1) }}>
          Built on belief that<br />potential has no address
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div style={fade(0.2)}>
            {["NayePankh Foundation is a student-led non-profit committed to empowering underprivileged youth through education, awareness campaigns, and skill development programs.",
              "We believe every young person, regardless of their socio-economic background, deserves quality learning, guidance, and opportunities to grow.",
              "Our team of passionate volunteers works tirelessly across 18 cities to bridge the gap between potential and opportunity."]
              .map((p, i) => (
                <p key={i} style={{ color: darkMode ? "#aaa" : "#666", lineHeight: 1.8, marginBottom: "1rem" }}>{p}</p>
              ))}

            {/* ONLY THIS PART CHANGED - flex wrap instead of grid */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: "1.5rem" }}>
              {values.map((v) => (
                <div key={v} style={{ background: "#E1F5EE", padding: "8px 16px", borderRadius: 100, fontSize: "0.85rem", fontWeight: 600, color: "#0F6E56", whiteSpace: "nowrap" }}>{v}</div>
              ))}
            </div>

          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, ...fade(0.3) }}>
            {[["🌟", "#5DCAA5", "#0F6E56"], ["📖", "#9FE1CB", "#1D9E75"], ["🤝", "#E1F5EE", "#5DCAA5"]].map(
              ([emoji, from, to], i) => (
                <div key={i} style={{ height: 200, borderRadius: 16, background: `linear-gradient(135deg,${from},${to})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2.5rem", gridColumn: i === 2 ? "span 2" : undefined }}>
                  {emoji}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;