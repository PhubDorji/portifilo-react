import { useState } from "react";
import "./Navbar.css";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="logo">
        Phub<span>.</span>
      </div>

      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>

        <a href="#about">01 About</a>

        <a href="#projects">02 Work</a>

        <a href="#skills">03 Skills</a>

        <a href="#contact">04 Contact</a>

      </div>

    </nav>
  );
}

export default Navbar;