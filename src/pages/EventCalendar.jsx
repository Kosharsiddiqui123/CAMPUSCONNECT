import React, { useState, useEffect } from "react";
import eventsData from "../data/eventsData.json"; // apni path ke hisaab se adjust karo
import "../css/event-calendar.css";

const EventCalendar = () => {
  const months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
  ];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Category colors
  const categoryColors = {
    Tech: "#4361ee",
    Sports: "#f72585",
    Cultural: "#3a0ca3",
    Workshops: "#ff9800"
  };

  // Extract unique years
  const years = [...new Set(eventsData.map(e => new Date(e.date).getFullYear()))];

  const [selectedYear, setSelectedYear] = useState(years[0]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredEvents, setFilteredEvents] = useState([]);

  // Filter events when year/category changes
  useEffect(() => {
    let filtered = eventsData.filter(e => new Date(e.date).getFullYear() === selectedYear);
    if (selectedCategory !== "All") {
      filtered = filtered.filter(e => e.category === selectedCategory);
    }
    setFilteredEvents(filtered);
  }, [selectedYear, selectedCategory]);

  // Generate month calendar
  const generateCalendar = (year, monthIndex) => {
    const firstDay = new Date(year, monthIndex, 1).getDay();
    const lastDate = new Date(year, monthIndex + 1, 0).getDate();

    let weeks = [];
    let week = Array(firstDay).fill(null);

    for (let day = 1; day <= lastDate; day++) {
      week.push(day);
      if (week.length === 7 || day === lastDate) {
        while (week.length < 7) week.push(null);
        weeks.push(week);
        week = [];
      }
    }
    return weeks;
  };

  // Get events for specific date
  const getEventsForDate = (year, month, date) => {
    return filteredEvents.filter(e => {
      const d = new Date(e.date);
      return d.getFullYear() === year &&
             d.getMonth() === month &&
             d.getDate() === date;
    });
  };

  return (
    <div className="calendar-page">
      <h1 className="calendar-title">📅 Event Calendar {selectedYear}</h1>

      {/* Filters */}
      <div className="filters">
        <select value={selectedYear} onChange={(e) => setSelectedYear(Number(e.target.value))}>
          {years.map(y => <option key={y} value={y}>{y}</option>)}
        </select>

        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="All">All Categories</option>
          {Object.keys(categoryColors).map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Calendar Grid */}
      <div className="calendar-grid">
        {months.map((month, idx) => (
          <div className="month-box" key={month}>
            <h2 className="month-title">{month}</h2>
            <div className="days-row">
              {days.map((day) => (
                <div key={day} className="day-header">{day}</div>
              ))}
            </div>
            <div className="dates-grid">
              {generateCalendar(selectedYear, idx).map((week, wIdx) => (
                <div key={wIdx} className="week-row">
                  {week.map((date, dIdx) => {
                    const events = date ? getEventsForDate(selectedYear, idx, date) : [];
                    return (
                      <div key={dIdx} className={`date-cell ${date ? "" : "empty"}`}>
                        {date || ""}
                        {events.length > 0 && (
                          <div className="event-bullets">
                            {events.map(ev => (
                              <span
                                key={ev.id}
                                className="event-dot"
                                style={{ backgroundColor: categoryColors[ev.category] }}
                                title={`${ev.title} (${ev.category})`}
                              ></span>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

            {/* Month Legend */}
            <div className="month-legend">
              {filteredEvents
                .filter(ev => new Date(ev.date).getMonth() === idx)
                .map(ev => (
                  <div key={ev.id} className="legend-item">
                    <span
                      className="legend-dot"
                      style={{ backgroundColor: categoryColors[ev.category] }}
                    ></span>
                    {ev.title}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
