import React, { useState } from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const closeMenu = () => {
    setIsActive(false);
  };

  return (
    <header>
      <div className="container header-content">
        {/* Logo Section */}
        <p className="logo" data-page="home">
          <i className="fas fa-calendar-alt" /> CampusConnect
        </p>

        {/* Menu Toggle for Mobile */}
        <div
          className={`menu-toggle ${isActive ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </div>

        {/* Navigation Links */}
        <nav id="nav" className={isActive ? "active" : ""}>
          <ul>
            <li>
              <Link to="/" data-page="home" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/event" data-page="events" onClick={closeMenu}>
                Events
              </Link>
            </li>
            <li>
              <Link to="/about" data-page="about" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" data-page="contact" onClick={closeMenu}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/gallery" data-page="gallery" onClick={closeMenu}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/calender" data-page="calendar" onClick={closeMenu}>
                Calendar
              </Link>
            </li>
            <li>
              <Link to="/register" data-page="register" onClick={closeMenu}>
                Register
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
