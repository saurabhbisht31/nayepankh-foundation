import { useState, useEffect } from "react";

function Navbar({ darkMode, setDarkMode }) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "programs", "volunteer", "contact"];

      sections.forEach((id) => {
        const el = document.getElementById(id);

        if (el && window.scrollY >= el.offsetTop - 80) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set active section on initial load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: darkMode
          ? "rgba(15,15,15,0.95)"
          : "rgba(255,255,255,0.95)",
        backdropFilter: "blur(10px)",
        borderBottom: `1px solid ${darkMode ? "#2a2a2a" : "#e8e8e5"}`,
        padding: "0 5%",
        transition: "background 0.3s",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {/* Logo */}
        <div
          onClick={() => scrollTo("home")}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.2rem",
            color: "#0F6E56",
            letterSpacing: "-0.5px",
            cursor: "pointer",
          }}
        >
          NayePankh{" "}
          <span style={{ color: darkMode ? "#fff" : "#1a1a1a" }}>
            Foundation
          </span>
        </div>

        {/* Nav Links */}
        <ul
          style={{
            display: "flex",
            gap: "2rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {["about", "programs", "volunteer", "contact"].map((id) => (
            <li key={id}>
              <a
                onClick={() => scrollTo(id)}
                style={{
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "color .2s",
                  color:
                    active === id
                      ? "#1D9E75"
                      : darkMode
                      ? "#aaa"
                      : "#666",
                }}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side: Toggle + CTA */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            title="Toggle dark mode"
            style={{
              background: darkMode ? "#2a2a2a" : "#f0f0f0",
              border: "none",
              borderRadius: 100,
              width: 52,
              height: 28,
              cursor: "pointer",
              position: "relative",
              transition: "background 0.3s",
              flexShrink: 0,
              padding: 0,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 4,
                left: darkMode ? 26 : 4,
                width: 20,
                height: 20,
                borderRadius: "50%",
                background: darkMode ? "#1D9E75" : "#fff",
                boxShadow: "0 1px 4px rgba(0,0,0,0.3)",
                transition: "left 0.3s",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 11,
              }}
            >
              {darkMode ? "🌙" : "☀️"}
            </div>
          </button>

          {/* CTA Button */}
          <button
            onClick={() => scrollTo("volunteer")}
            style={{
              background: "#1D9E75",
              color: "#fff",
              border: "none",
              padding: "8px 20px",
              borderRadius: "100px",
              fontSize: "0.875rem",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Join Us
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;