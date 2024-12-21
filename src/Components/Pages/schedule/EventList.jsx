import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EventList.css'; // Import the CSS file

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [nextPageToken, setNextPageToken] = useState(null); // For pagination
  const [previousEvents, setPreviousEvents] = useState([]); // To store previous events
  const [loading, setLoading] = useState(false); // For loading state

  const fetchEvents = async (pageToken = null) => {
    const calendarId = 'nilushkapoornima@gmail.com'; // Replace with your Calendar ID (not a URL)
    const apiKey = 'AIzaSyDtxXWJTcweO4rvwZZxhM6B4B_1NKjb-I0'; // Replace with your API Key

    // Get yesterday's date in ISO format
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const timeMin = yesterday.toISOString(); // Time from yesterday

    setLoading(true); // Start loading

    try {
      const response = await axios.get(
        `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events`,
        {
          params: {
            key: apiKey,
            timeMin: timeMin,
            singleEvents: true,
            orderBy: 'startTime',
            maxResults: 5, // Limit to 5 events per page
            pageToken: pageToken, // Pass the nextPageToken for pagination
          },
        }
      );

      // Extract events and next page token
      const eventList = response.data.items.map((event) => ({
        id: event.id,
        name: event.summary || 'Unnamed Event',
        date: event.start.date || event.start.dateTime,
      }));

      setPreviousEvents((prev) => [...prev, eventList]); // Save previous events
      setEvents(eventList);
      setNextPageToken(response.data.nextPageToken); // Update nextPageToken for the next fetch
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    fetchEvents(); // Fetch events when component mounts
  }, []);

  const handleNext = () => {
    if (nextPageToken) {
      fetchEvents(nextPageToken); // Fetch the next page of events
    }
  };

  const handlePrevious = () => {
    if (previousEvents.length > 1) {
      // Pop the last set of events and set it as the current events
      const prevEvents = [...previousEvents];
      prevEvents.pop();
      setEvents(prevEvents[prevEvents.length - 1]);
      setPreviousEvents(prevEvents); // Update previous events history
    }
  };

  return (
    <div className="event-list-container">
      <h2>Upcoming Events</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <ul>
            {events.map((event) => (
              <li key={event.id}>
                <strong>{event.name}</strong>
                <span>{new Date(event.date).toLocaleDateString()}</span>
              </li>
            ))}
          </ul>
          <div className="pagination-buttons">
            {previousEvents.length > 1 && (
              <button onClick={handlePrevious} className="prev-button">
                &lt;
              </button>
            )}
            {nextPageToken && (
              <button onClick={handleNext} className="next-button">
                &gt;
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default EventList;
