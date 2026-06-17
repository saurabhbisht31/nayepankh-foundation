import useScrollAnimation from "../hooks/useScrollAnimation";

function Contact({ darkMode }) {
  const { ref, visible } = useScrollAnimation();

  const cards = [
    { icon: "📧", title: "Email Us", info: "contact@nayepankh.org" },
    { icon: "📱", title: "Social Media", info: "@NayePankhFoundation" },
    { icon: "📍", title: "Registered In", info: "New Delhi, India (Pan-India ops)" },
  ];

  return (
    <section id="contact" ref={ref} style={{ padding: "100px 5%", background: "#0F6E56" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "all 0.6s ease" }}>
          <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#9FE1CB", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "0.75rem" }}>Reach Out</div>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "2.4rem", letterSpacing: "-0.5px", marginBottom: "3rem", color: "#fff" }}>We'd love to hear from you</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
          {cards.map((c, i) => (
            <div key={c.title} style={{
              background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 16, padding: 28, textAlign: "center",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(40px)",
              transition: `all 0.6s ease ${0.1 + i * 0.1}s`,
            }}>
              <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{c.icon}</div>
              <h4 style={{ fontWeight: 600, fontSize: "1rem", marginBottom: 6, color: "#fff" }}>{c.title}</h4>
              <p style={{ fontSize: "0.875rem", color: "#9FE1CB" }}>{c.info}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;