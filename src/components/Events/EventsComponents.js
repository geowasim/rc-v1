import React from "react";
import { FAKE_ARR_EVENTS } from "../../data/day-month";
import { compareTwoDates } from "../../utils/arrayOfDate";

const EventsComponents = ({
  setCalendarEvent,
  setShowEvent,
  date,
  setSelectedDate,
  todos,
}) => {
  return (
    <>
      {todos.length > 0 &&
        todos.map((evnt, idx) => {
          return (
            compareTwoDates(evnt.date, date) && (
              <p
                className="event_block"
                key={idx}
                style={{
                  color: evnt.color,
                  background: evnt.background,
                }}
                onClick={() => {
                  setCalendarEvent(evnt);
                  setShowEvent(true);
                  setSelectedDate(date);
                }}
              >
                {evnt.title}
              </p>
            )
          );
        })}
    </>
  );
};

export default EventsComponents;
