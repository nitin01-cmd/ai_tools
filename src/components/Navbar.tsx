import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import fisLogo from "@/assets/fis-logo.png";
import "../styles/navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar-wrapper">
      <nav className="navbar-pill">
        {/* Logo */}
        <div className="navbar-logo">
          <img src={fisLogo} alt="Future India School" className="logo-img" />
        </div>

        {/* Toggle button for mobile */}
        <button
          className="navbar-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Center Nav Items */}
        <div className={`navbar-center ${isMenuOpen ? "active" : ""}`}>
          <a href="#" className="nav-link">
            Home
          </a>
          <a href="#" className="nav-link">
            AI Tool Suite
          </a>
        </div>

        {/* Right Actions */}
        <div className={`navbar-right ${isMenuOpen ? "active" : ""}`}>
          <button className="nav-login">Login</button>
          <Button size="sm" className="nav-cta">
            Get Started
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
