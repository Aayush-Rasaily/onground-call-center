import React from "react";
import { useState } from "react";
import {
  IconChevronLeft,
  IconChevronRight,
  IconCalendarEvent,
} from "@tabler/icons-react";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function Calendar() {
  const [month, setMonth] = useState(9);
  const [year, setYear] = useState(2026);

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1;

  const days = [];

  for (let i = 0; i < adjustedFirstDay; i++) {
    days.push(null);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    days.push(day);
  }

  const eventDays = [5, 8, 11, 14, 18, 22, 25, 29];

  const previousMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const nextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const today = () => {
    setMonth(9);
    setYear(2026);
  };

  return (
    <>
      <div className="page-heading">
        <div>
          <div className="eyebrow">SCHEDULE</div>
          <h1>Calendar</h1>
          <p>Keep track of callbacks, reviews and team events.</p>
        </div>

        <button className="outline-btn" onClick={today}>
          Today
        </button>
      </div>

      <section className="calendar-panel">
        <div className="calendar-toolbar">
          <div className="month-title">
            <IconCalendarEvent size={20} />
            <strong>
              {months[month]} {year}
            </strong>
          </div>

          <div className="month-controls">
            <button onClick={previousMonth}>
              <IconChevronLeft size={18} />
            </button>

            <button onClick={today}>Today</button>

            <button onClick={nextMonth}>
              <IconChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="calendar-grid">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
            (day) => (
              <div className="calendar-weekday" key={day}>
                {day}
              </div>
            )
          )}

          {days.map((day, index) => (
            <div
              className={`calendar-day ${
                day === 11 ? "today-day" : ""
              }`}
              key={index}
            >
              {day && (
                <>
                  <span>{day}</span>

                  {eventDays.includes(day) && (
                    <div className="event-dot"></div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>

        <div className="calendar-events">
          <h3>Upcoming</h3>

          <div className="event-row">
            <div className="event-time">4:30 PM</div>
            <div>
              <strong>Callback · Priya Iyer</strong>
              <span>Billing dispute follow-up</span>
            </div>
          </div>

          <div className="event-row">
            <div className="event-time">5:15 PM</div>
            <div>
              <strong>Team coaching</strong>
              <span>Avani AI Coaching · Call Centre</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Calendar;