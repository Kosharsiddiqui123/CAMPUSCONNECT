import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/Events.css";
import eventsData from "../data/eventsData.json";

export default function Events() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("none");
  const [filteredEvents, setFilteredEvents] = useState(eventsData);

  useEffect(() => {
    let updatedEvents = [...eventsData];

    // Category Filter
    if (filter !== "All") {
      updatedEvents = updatedEvents.filter((event) => event.category === filter);
    }

    // Search Filter
    if (search.trim() !== "") {
      updatedEvents = updatedEvents.filter(
        (event) =>
          event.title.toLowerCase().includes(search.toLowerCase()) ||
          event.desc.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Sorting
    if (sort === "date-newest") {
      updatedEvents.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sort === "date-oldest") {
      updatedEvents.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (sort === "title-az") {
      updatedEvents.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort === "title-za") {
      updatedEvents.sort((a, b) => b.title.localeCompare(a.title));
    }

    setFilteredEvents(updatedEvents);
  }, [filter, search, sort]);

  return (
    <div className="events-page container">
      <h2 className="section-title">Explore Events</h2>

      {/* Filter & Search Bar */}
      <div className="controls-bar">
        {/* Category Filter */}
        <div className="filter-bar">
          {["All", "Tech", "Cultural", "Sports", "Workshops"].map((cat) => (
            <div
              key={cat}
              className={`filter-btn ${filter === cat ? "active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </div>
          ))}
        </div>

        {/* Search Input */}
        <input
          type="text"
          className="search-input"
          placeholder="Search events..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Sorting Dropdown */}
        <select
          className="sort-dropdown"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="none">Sort By</option>
          <option value="date-newest">Date: Newest First</option>
          <option value="date-oldest">Date: Oldest First</option>
          <option value="title-az">Title: A - Z</option>
          <option value="title-za">Title: Z - A</option>
        </select>
      </div>

      {/* Events Grid */}
      <div className="events-grid">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div key={event.id} className="event-card-event">
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
          ))
        ) : (
          <p className="no-events">No events found!</p>
        )}
      </div>
    </div>
  );
}
