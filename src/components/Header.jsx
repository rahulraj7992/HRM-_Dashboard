import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated"); // Remove authentication flag
    navigate("/login"); // Redirect to Sign In page
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

        {/* Buttons (Hidden on small screens, shown when menu is open) */}
        <div className={`menu-buttons ${menuOpen ? "show" : ""}`}>
          <button className="header-button">Activity</button>
          <button className="header-button">Alerts</button>
          <button className="header-button">Message</button>
          <button className="header-button">Admin</button>
          <button className="header-button" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
}
