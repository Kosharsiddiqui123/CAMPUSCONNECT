import React from "react";
import { useParams, Link } from "react-router-dom";
import eventsData from "../data/eventsData.json";
import "../css/event-details.css";

const EventDetails = () => {
  const { id } = useParams();
  const event = eventsData.find((e) => e.id === parseInt(id));

  if (!event) {
    return <h2 className="no-event">Event not found!</h2>;
  }

  return (
    <div className="event-details-page container">
      <div className="event-details-card">
        {/* Side-by-side layout */}
        <div className="event-banner">
          <img src={`/${event.image}`} alt={event.title} />
        </div>
        <div className="event-info">
          <h2>{event.title}</h2>
          <p className="event-date">{event.date}</p>
          <p className="event-category">Category: {event.category}</p>
          <p className="event-desc">{event.desc}</p>
          <div className="event-actions">
            <Link to="/register" className="btn btn-primary">
              Register Now
            </Link>
            <Link to="/event" className="btn btn-outline">
              Back to Events
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
