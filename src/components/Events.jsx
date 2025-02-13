import React, { useState, useEffect } from 'react';
import './Events.css';

function Events() {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const formatDateRange = (date) => {
    const start = new Date(date);
    start.setDate(start.getDate() - start.getDay()); // Sunday
    const end = new Date(start);
    end.setDate(end.getDate() + 6); // Saturday
    return `${start.toLocaleDateString()} - ${end.toLocaleDateString()}`;
  };

  const updateCalendarUrl = (date) => {
    const dateString = date.toISOString().split('T')[0];
    const baseUrl = 'https://calendar.google.com/calendar/embed';
    const params = new URLSearchParams({
      src: 'mdlcv.org_qroqhf2legl5g7t5p7v8dk713c@group.calendar.google.com',
      mode: 'WEEK',
      dates: dateString,
      showPrint: '0',
      showTabs: '1',
      showCalendars: '0'
    });
    return `${baseUrl}?${params.toString()}`;
  };

  const navigateCalendar = (weeks) => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + weeks * 7);
    setCurrentDate(newDate);
  };

  useEffect(() => {
    // Additional calendar update logic can be added here if needed.
  }, [currentDate]);

  return (
    <div className="events">
      <div className="calendar-header">
        <button onClick={() => navigateCalendar(-1)}>Previous Week</button>
        <button onClick={() => navigateCalendar(1)}>Next Week</button>
        <button onClick={() => setCurrentDate(new Date())}>Current Week</button>
        <div className="current-week">{formatDateRange(currentDate)}</div>
      </div>
      <iframe 
        title="Calendar"
        className="calendar-frame"
        src={updateCalendarUrl(currentDate)}
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
}

export default Events;
