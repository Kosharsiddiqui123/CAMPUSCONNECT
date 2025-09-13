import React from 'react'
import '../css/footer.css'
const Footer = () => {
  return (
   <footer>
  <div className="container">
    <div className="footer-content">
      <div className="footer-column">
        <h3>CampusConnect</h3>
        <p>Simplifying event management for educational institutions since 2020.</p>
        <div className="social-links">
          <a href="#"><i className="fab fa-facebook-f" /></a>
          <a href="#"><i className="fab fa-twitter" /></a>
          <a href="#"><i className="fab fa-instagram" /></a>
          <a href="#"><i className="fab fa-linkedin-in" /></a>
        </div>
      </div>
      <div className="footer-column">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#" data-page="home">Home</a></li>
          <li><a href="#" data-page="events">Events</a></li>
          <li><a href="#" data-page="about">About</a></li>
          <li><a href="#" data-page="contact">Contact</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Resources</h3>
        <ul>
          <li><a href="#">Blog</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Support</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Newsletter</h3>
        <p>Subscribe to our newsletter for updates on new features and events.</p>
      </div>
    </div>
    <div className="copyright">
      <p>© 2023 CampusConnect. All rights reserved.</p>
    </div>
  </div>
</footer>


  )
}

export default Footer
