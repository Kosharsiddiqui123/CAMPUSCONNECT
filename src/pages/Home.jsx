import React, { useState, useEffect } from 'react';
import '../css/home.css';
import eventsData from '../data/eventsData.json'; // adjust path according to project structure
import { Link } from 'react-router-dom';
const Home = () => {
  const [showModal, setShowModal] = useState(true);
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    setShowModal(true);
  }, []);

  const handleContinue = () => {
    if (step === 1) {
      if (!name.trim() || !role) {
        setError('Please enter your name and select a role.');
        return;
      }
      setError('');
      setStep(2);
    } else {
      setShowModal(false);
    }
  };

  return (
    <>
      {/* Entry Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            {step === 1 && (
              <>
                <h2 className="modal-title">Welcome to CampusConnect 🎓</h2>
                <p className="modal-subtitle">Please enter your details to continue</p>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="modal-input"
                />
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="modal-select"
                >
                  <option value="">Select Role</option>
                  <option value="Student">Student</option>
                  <option value="Faculty">Faculty</option>
                  <option value="Visitor">Visitor</option>
                </select>
                {error && <p className="modal-error">{error}</p>}
                <button className="modal-btn" onClick={handleContinue}>
                  Continue
                </button>
              </>
            )}

            {step === 2 && (
              <>
                <h2 className="modal-title">🎉 Welcome!</h2>
                <p className="modal-subtitle">
                  Hello <span className="highlight">{name}</span>, you are logged in as{' '}
                  <span className="highlight">{role}</span>.
                </p>
                <button className="modal-btn" onClick={handleContinue}>
                  Continue to Home
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background" />
        <div className="container">
          <h1>WELCOME TO CAMPUS CONNECT</h1>
          <p>
            CampusConnect simplifies event management for students and faculty. Create,
            manage, and promote events with our intuitive platform.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose CampusConnect</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <img src="Images/icons (1).png" alt="Easy Event Creation" height={60} width={60} />
              </div>
              <h3>Easy Event Creation</h3>
              <p>Create events in minutes with our simple and intuitive event creation tools.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src="Images/icons (3).png" alt="Ticket Management" height={60} width={60} />
              </div>
              <h3>Ticket Management</h3>
              <p>Manage event tickets, track attendance, and handle registrations seamlessly.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src="Images/icons (2).png" alt="Event Promotion" height={60} width={60} />
              </div>
              <h3>Event Promotion</h3>
              <p>Promote your events to the right audience with our targeted marketing tools.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section - Dynamic */}
      <section className="events">
        <div className="container">
          <h2 className="section-title">Upcoming Events</h2>
          <div className="events-grid">
            {eventsData.map((event) => (
              <div className="event-card" key={event.id}>
                <div className="event-img">
                  <img src={event.image} alt={event.title} />
                </div>
                <div className="event-details">
                  <div className="event-date">{event.date}</div>
                  <h3>{event.title}</h3>
                  <p>{event.desc}</p>
                  <Link to={`/event/${event.id}`} className="btn btn-outline">
                  Learn more
                </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <div className="container about-content">
        <div className="about-text">
          <h2>CampusConnect</h2>
          <p>
            CampusConnect was founded with a mission to simplify event management for
            educational institutions. We understand the challenges of organizing college
            events and have created a platform that makes the process seamless.
          </p>
        </div>
        <swiper-container
          class="mySwiper"
          pagination="true"
          effect="cube"
          grab-cursor="true"
          cube-effect-shadow="true"
          cube-effect-slide-shadows="true"
          cube-effect-shadow-offset={20}
          cube-effect-shadow-scale="0.94"
        >
          <swiper-slide><img src="Images/slider (1).jpg" alt="Slide 1" /></swiper-slide>
          <swiper-slide><img src="Images/slider (2).jpg" alt="Slide 2" /></swiper-slide>
          <swiper-slide><img src="Images/slider (3).jpg" alt="Slide 3" /></swiper-slide>
          <swiper-slide><img src="Images/slider (4).jpg" alt="Slide 4" /></swiper-slide>
        </swiper-container>
      </div>
    </>
  );
};

export default Home;
