import { useState } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

const programs = [
  {
    icon: "📚",
    title: "Education Support",
    desc: "Free study materials, online resources, and one-on-one mentoring for students from Class 6 to 12.",
    more: "We provide textbooks, digital resources, live doubt-solving sessions, and connect students with college mentors. Over 2,000 students have benefited from this program across 18 cities.",
  },
  {
    icon: "💼",
    title: "Internship Program",
    desc: "Real-world internships for college students in tech, design, marketing, and social impact.",
    more: "Students get hands-on experience working on real NGO projects, receive a certificate of completion, and build a portfolio. Roles are available in web development, content writing, graphic design, and data analytics.",
  },
  {
    icon: "🌱",
    title: "Awareness Campaigns",
    desc: "Community drives covering hygiene, mental health, digital literacy, and environment.",
    more: "Our volunteers conduct workshops in schools and communities, distribute awareness materials, and run social media drives. We have reached over 10,000 people through these campaigns.",
  },
  {
    icon: "🧠",
    title: "Skill Development",
    desc: "Workshops on communication, coding, entrepreneurship, and leadership for youth aged 14–25.",
    more: "Weekend workshops taught by industry professionals and experienced volunteers. Topics include public speaking, basic coding, financial literacy, and personal branding. All workshops are completely free.",
  },
  {
    icon: "👩‍🏫",
    title: "Mentorship Network",
    desc: "Connecting students with professionals and seniors who guide career paths and goal setting.",
    more: "One-on-one mentorship sessions with professionals from IITs, IIMs, and top companies. Students get guidance on career choices, exam preparation, college applications, and skill building.",
  },
  {
    icon: "🏆",
    title: "Recognition & Awards",
    desc: "Celebrating student achievements through certificates and letters of recommendation.",
    more: "Top performers receive official certificates, LinkedIn recommendations, and letters of recommendation signed by our founders. Outstanding volunteers are featured on our website and social media.",
  },
];

function Programs({ darkMode }) {
  const { ref, visible } = useScrollAnimation();
  const [expanded, setExpanded] = useState(null);

  const toggle = (title) => {
    setExpanded(expanded === title ? null : title);
  };

  return (
    <section id="programs" ref={ref} style={{ padding: "100px 5%", background: darkMode ? "#111" : "#FAFAF8", transition: "background 0.3s" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "all 0.6s ease" }}>
          <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#1D9E75", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "0.75rem" }}>What We Do</div>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "2.4rem", letterSpacing: "-0.5px", marginBottom: "1rem", color: darkMode ? "#fff" : "#1a1a1a" }}>Programs that change lives</h2>
          <p style={{ fontSize: "1rem", color: darkMode ? "#aaa" : "#666", lineHeight: 1.7, maxWidth: 520, marginBottom: "3rem" }}>Each initiative is designed around the real needs of the communities we serve.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          {programs.map((p, i) => (
            <div
              key={p.title}
              style={{
                background: darkMode ? "#1a1a1a" : "#fff",
                borderRadius: 18, padding: 28,
                borderTop: `1px solid ${darkMode ? "#2a2a2a" : "#e8e8e5"}`,
                borderLeft: `1px solid ${darkMode ? "#2a2a2a" : "#e8e8e5"}`,
                borderRight: `1px solid ${darkMode ? "#2a2a2a" : "#e8e8e5"}`,
                borderBottom: `3px solid #1D9E75`,
                transition: "all 0.5s ease, transform 0.25s",
                cursor: "default",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(40px)",
                transitionDelay: `${0.1 + i * 0.08}s`,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = "0 16px 50px rgba(0,0,0,0.1)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
            >
              <div style={{ width: 52, height: 52, background: "#E1F5EE", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", marginBottom: "1.25rem" }}>
                {p.icon}
              </div>
              <div style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem", color: darkMode ? "#fff" : "#1a1a1a" }}>
                {p.title}
              </div>
              <p style={{ fontSize: "0.875rem", color: darkMode ? "#aaa" : "#666", lineHeight: 1.7 }}>
                {p.desc}
              </p>

              {/* Expanded detail - shows when clicked */}
              {expanded === p.title && (
                <div style={{
                  marginTop: "1rem", padding: "12px 14px",
                  background: darkMode ? "#111" : "#F0FBF6",
                  borderRadius: 10, borderLeft: "3px solid #1D9E75",
                  fontSize: "0.85rem", color: darkMode ? "#ccc" : "#444",
                  lineHeight: 1.7,
                  animation: "fadeIn 0.3s ease",
                }}>
                  {p.more}
                </div>
              )}

              {/* Learn more button */}
              <div
                onClick={() => toggle(p.title)}
                style={{
                  color: "#1D9E75", fontSize: "0.85rem", fontWeight: 600,
                  marginTop: "1rem", cursor: "pointer",
                  display: "flex", alignItems: "center", gap: 4,
                  userSelect: "none",
                }}
              >
                {expanded === p.title ? "Show less ↑" : "Learn more →"}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

export default Programs;