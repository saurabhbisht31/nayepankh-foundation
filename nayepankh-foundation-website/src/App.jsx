import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import Volunteer from "./components/Volunteer";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.style.background = darkMode ? "#0d0d0d" : "#fff";
    document.body.style.color = darkMode ? "#f0f0ef" : "#1a1a1a";
    document.body.style.transition = "background 0.3s, color 0.3s";
  }, [darkMode]);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Programs darkMode={darkMode} />
      <Volunteer darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;