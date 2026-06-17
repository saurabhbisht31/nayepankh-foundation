function Footer({ darkMode }) {
  return (
    <footer style={{ background: darkMode ? "#050505" : "#0a0a0a", color: "#999", textAlign: "center", padding: "24px 5%", fontSize: "0.85rem" }}>
      <p>© 2026 <span style={{ color: "#1D9E75" }}>NayePankh Foundation</span> · Built with purpose · All rights reserved</p>
    </footer>
  );
}

export default Footer;