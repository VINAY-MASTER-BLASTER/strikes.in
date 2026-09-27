import { useState, useEffect } from "react";
import { IconLightning } from "../Icons";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`} role="navigation" aria-label="Main navigation">
      <div className="navbar__inner">
        <a href="#" className="navbar__logo" aria-label="STRIKE Home">
          <IconLightning size={22} className="navbar__logo-icon" />
          <span className="navbar__logo-text">STRIKE</span>
        </a>

        <div className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
          <a href="#courses" className="navbar__link" onClick={() => setMenuOpen(false)}>Courses</a>
          <a href="#roadmap" className="navbar__link" onClick={() => setMenuOpen(false)}>Roadmap</a>
          <a href="#testimonials" className="navbar__link" onClick={() => setMenuOpen(false)}>Reviews</a>
          <a href="#" className="navbar__link">Pricing</a>
          <a href="#" className="navbar__link">Login</a>
          <a href="#courses" className="navbar__cta btn-shimmer" onClick={() => setMenuOpen(false)}>
            Get Started
          </a>
        </div>

        <button
          className={`navbar__burger ${menuOpen ? "navbar__burger--open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  );
}
