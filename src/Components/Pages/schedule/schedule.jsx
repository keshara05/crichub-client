import React from 'react';
import './schedule.css';

const Schedule = () => (
  <div className="schedule">
    <iframe
      src="https://calendar.google.com/calendar/embed?src=nilushkapoornima%40gmail.com&ctz=Asia%2FColombo"
      style={{ border: 0 }}
      width="800"
      height="600"
      title="Client Schedule"
    ></iframe>
  </div>
);

export default Schedule;
