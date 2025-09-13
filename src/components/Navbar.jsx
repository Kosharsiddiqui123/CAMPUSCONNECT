import React, { useState } from 'react'
import '../css/navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
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
          className={`menu-toggle ${isActive ? 'active' : ''}`} 
          id="menuToggle" 
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </div>

        {/* Navigation Links */}
        <nav id="nav" className={isActive ? 'active' : ''}>
          <ul>
            <li><Link to="/" data-page="home">Home</Link></li>
            <li><Link to="/event" data-page="events">Events</Link></li>
            <li><Link to="/about" data-page="about">About</Link></li>
            <li><Link to="/contact" data-page="contact">Contact</Link></li>
            <li><Link to="/gallery" data-page="gallery">Gallery</Link></li>
            <li><Link to="/calender" data-page="calendar">Calendar</Link></li>
          </ul>
        </nav>

        {/* Authentication Buttons */}
        <div className="auth-buttons">
          <Link to="/register" className="btn">Register</Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar
