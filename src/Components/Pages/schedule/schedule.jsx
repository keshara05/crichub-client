import React, { useEffect, useState } from "react";
import axios from "axios";
import "./schedule.css";

const Schedule = () => {
  const [events, setEvents] = useState([]);
  const calendarId = "nilushkapoornima@gmail.com@group.calendar.google.com"; // Replace with your Google Calendar ID
  const apiKey = "AIzaSyCuJzPunia5Qdmrj_XcRgrR_VSPlmFItew"; // Replace with your API Key

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}`
        );
        setEvents(response.data.items || []);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="schedule-container">
      <h2>Match Schedule</h2>
      <div className="schedule-list">
        {events.length > 0 ? (
          events.map((event) => (
            <div key={event.id} className="schedule-card">
              <h3>{event.summary}</h3>
              <p><strong>Date:</strong> {new Date(event.start.dateTime || event.start.date).toLocaleDateString()}</p>
              <p><strong>Time:</strong> {new Date(event.start.dateTime || event.start.date).toLocaleTimeString()}</p>
              <p><strong>Location:</strong> {event.location || "N/A"}</p>
            </div>
          ))
        ) : (
          <p>No events available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default Schedule;
