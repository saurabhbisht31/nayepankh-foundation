import { useState } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

function Volunteer({ darkMode }) {
  const { ref, visible } = useScrollAnimation();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", interest: "", why: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const inputStyle = {
    width: "100%", padding: "11px 14px",
    border: `1.5px solid ${darkMode ? "#333" : "#e8e8e5"}`,
    borderRadius: 10, fontFamily: "Inter,sans-serif", fontSize: "0.9rem",
    color: darkMode ? "#fff" : "#1a1a1a",
    background: darkMode ? "#0d0d0d" : "#fff",
    outline: "none", transition: "border-color .2s",
  };

  const inp = (field, placeholder, type = "text") => (
    <input type={type} placeholder={placeholder} value={form[field]}
      onChange={(e) => setForm({ ...form, [field]: e.target.value })}
      style={inputStyle}
      onFocus={(e) => (e.target.style.borderColor = "#1D9E75")}
      onBlur={(e) => (e.target.style.borderColor = darkMode ? "#333" : "#e8e8e5")}
    />
  );

  const fade = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(40px)",
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
  });

  return (
    <section id="volunteer" ref={ref} style={{ padding: "100px 5%", background: darkMode ? "#0d0d0d" : "#fff", transition: "background 0.3s" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={fade(0)}>
          <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#1D9E75", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "0.75rem" }}>Get Involved</div>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "2.4rem", letterSpacing: "-0.5px", marginBottom: "3rem", color: darkMode ? "#fff" : "#1a1a1a" }}>Join the movement</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 80, alignItems: "start" }}>
          <div style={fade(0.1)}>
            <p style={{ color: darkMode ? "#aaa" : "#666", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Volunteering with NayePankh is more than giving time — it's a chance to grow, lead, and create tangible change. Whether you're a student or professional, there's a role for you.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[["Fill the registration form", "Tell us about yourself and your interests"],
                ["Get matched with a program", "We connect you with the best fit initiative"],
                ["Start making an impact", "Onboarding, training, and your first assignment"]].map(([title, sub], i) => (
                <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{ width: 32, height: 32, background: "#1D9E75", color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8rem", fontWeight: 700, flexShrink: 0 }}>{i + 1}</div>
                  <div>
                    <h4 style={{ fontWeight: 600, fontSize: "0.95rem", marginBottom: 2, color: darkMode ? "#fff" : "#1a1a1a" }}>{title}</h4>
                    <p style={{ fontSize: "0.85rem", color: darkMode ? "#aaa" : "#666" }}>{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: darkMode ? "#111" : "#FAFAF8", borderRadius: 20, padding: 32, border: `1px solid ${darkMode ? "#2a2a2a" : "#e8e8e5"}`, ...fade(0.2) }}>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.5rem", marginBottom: "1.5rem", color: darkMode ? "#fff" : "#1a1a1a" }}>Volunteer Registration</h3>
            <form onSubmit={handleSubmit}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 14 }}>
                <div><label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: darkMode ? "#ddd" : "#1a1a1a", marginBottom: 6 }}>First Name</label>{inp("firstName", "Rahul")}</div>
                <div><label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: darkMode ? "#ddd" : "#1a1a1a", marginBottom: 6 }}>Last Name</label>{inp("lastName", "Sharma")}</div>
              </div>
              <div style={{ marginBottom: 14 }}><label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: darkMode ? "#ddd" : "#1a1a1a", marginBottom: 6 }}>Email Address</label>{inp("email", "rahul@example.com", "email")}</div>
              <div style={{ marginBottom: 14 }}><label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: darkMode ? "#ddd" : "#1a1a1a", marginBottom: 6 }}>Phone Number</label>{inp("phone", "+91 98765 43210", "tel")}</div>
              <div style={{ marginBottom: 14 }}>
                <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: darkMode ? "#ddd" : "#1a1a1a", marginBottom: 6 }}>Area of Interest</label>
                <select value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })} style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "#1D9E75")}
                  onBlur={(e) => (e.target.style.borderColor = darkMode ? "#333" : "#e8e8e5")}>
                  <option value="">Select a program</option>
                  {["Education Support", "Internship Program", "Awareness Campaigns", "Skill Development", "Mentorship"].map((o) => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div style={{ marginBottom: 14 }}>
                <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: darkMode ? "#ddd" : "#1a1a1a", marginBottom: 6 }}>Why do you want to volunteer?</label>
                <textarea placeholder="Share your motivation..." value={form.why}
                  onChange={(e) => setForm({ ...form, why: e.target.value })}
                  style={{ ...inputStyle, height: 90, resize: "none" }}
                  onFocus={(e) => (e.target.style.borderColor = "#1D9E75")}
                  onBlur={(e) => (e.target.style.borderColor = darkMode ? "#333" : "#e8e8e5")} />
              </div>
              <button type="submit" style={{ width: "100%", background: submitted ? "#0F6E56" : "#1D9E75", color: "#fff", border: "none", padding: 13, borderRadius: 10, fontSize: "0.95rem", fontWeight: 600, cursor: "pointer", transition: "background 0.3s", marginTop: 4 }}>
                {submitted ? "✓ Registered Successfully!" : "Register as Volunteer"}
              </button>
              <p style={{ textAlign: "center", fontSize: "0.78rem", color: darkMode ? "#666" : "#999", marginTop: 10 }}>🔒 Your information is kept private and never shared.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Volunteer;