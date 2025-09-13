import React from 'react';
import '../css/about.css';

const About = () => {
  return (
    <div className="about-wrapper">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background"></div>
        <div className="container">
          <h1>ABOUT OUR COLLEGE</h1>
          <p>
            An introduction to who we are, our values, and the unique culture that defines us. Get
            to know the heart and soul of our institution.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-text">
            <h2>Our Mission</h2>
            <p>
              Welcome to <b>CAMPUS CONNECT</b>, a vibrant hub of learning, tradition, and community
              spirit. Since our founding, we’ve built a legacy of academic excellence and a
              welcoming environment for students, staff, and visitors alike. Our college isn't just a
              place for education — it’s where lifelong connections are formed, diverse perspectives
              are celebrated, and future leaders are nurtured.
            </p>
          </div>
          <div className="about-image">
            <img src="Images/about.png" alt="Our Mission" />
          </div>
        </div>
    

      {/* Traditions Section */}
      
        <div className="about-container">
          <div className="about-image">
            <img src="Images/trraditional.jpg" alt="Our Traditions" />
          </div>
          <div className="about-text">
            <h2>Our Traditions</h2>
            <p>
              At <b>CAMPUS CONNECT</b>, we take immense pride in our rich traditions that have been
              passed down through generations. From our annual events to the unique rituals that
              define us, these traditions create belonging and foster school pride. They bridge the
              past, present, and future, making each student and guest part of something special.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Our Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <img src="Images/profile (3).jpg" alt="Sarah Johnson" />
            <h3>Sarah Johnson</h3>
            <p className="role">CEO & Founder</p>
            <p>Former student council president passionate about community building.</p>
          </div>
          <div className="team-card">
            <img src="Images/profile (2).jpg" alt="Ammar Arcade" />
            <h3>Ammar Arcade</h3>
            <p className="role">CEO & Founder</p>
            <p>Event coordinator with a love for creating memorable student experiences.</p>
          </div>
          <div className="team-card">
            <img src="Images/profile (1).jpg" alt="Anthony Johnson" />
            <h3>Anthony Johnson</h3>
            <p className="role">CEO & Founder</p>
            <p>Alumni volunteer committed to fostering connections and alumni engagement.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
