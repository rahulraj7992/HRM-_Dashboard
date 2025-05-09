import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/header.css";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBell,
  faEnvelope,
  faUserShield,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <div className="header">
      <h1 className="header-title">HRM Software</h1>

      <div className="header-actions">
        <input type="text" className="search-box" placeholder="Search..." />

        {/* Hamburger Menu for Small Screens */}
        <button className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        {/* Navigation Buttons */}
        <div className={`menu-buttons ${menuOpen ? "show" : ""}`}>
          <button className="header-button" onClick={() => navigate("/profile")}>
            <FontAwesomeIcon icon={faUser} /> Profile
          </button>
          <button className="header-button" onClick={() => navigate("/alerts")}>
            <FontAwesomeIcon icon={faBell} /> Alerts
          </button>
          <button className="header-button" onClick={() => navigate("/messages")}>
            <FontAwesomeIcon icon={faEnvelope} /> Message
          </button>
          <button className="header-button" onClick={() => navigate("/admin")}>
            <FontAwesomeIcon icon={faUserShield} /> Admin
          </button>
          <button className="header-button" onClick={handleLogout}>
            <FontAwesomeIcon icon={faRightFromBracket} /> Logout
          </button>
        </div>
      </div>
    </div>
  );
}
