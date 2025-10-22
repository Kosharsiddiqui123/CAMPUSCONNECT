import React from "react";
import { Link } from "react-router-dom";
import "../css/footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          
          {/* Column 1 - Brand Info */}
          <div className="footer-column">
            <h3>CampusConnect</h3>
            <p>Simplifying event management for educational institutions since 2020.</p>
            <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
           <i className="fab fa-facebook-f" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <i className="fab fa-twitter" />
          </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
         <i className="fab fa-instagram" />
          </a>
       <a href="https://linkedin.com" target="_blank" rel="noreferrer">
         <i className="fab fa-linkedin-in" />
          </a>
          </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/event">Events</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3 - Newsletter */}
          <div className="footer-column">
            <h3>Newsletter</h3>
            <p>Subscribe to our newsletter for updates on new features and events.</p>
            {/* Simple email input (optional) */}
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>

        </div>

        {/* Copyright */}
        <div className="copyright">
          <p>© {new Date().getFullYear()} CampusConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
