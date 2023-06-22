import React from "react";
import { FAKE_ARR_EVENTS } from "../../data/day-month";
import { compareTwoDates } from "../../utils/arrayOfDate";

const EventsComponents = ({ setCalendarEvent, setShowEvent, date }) => {
  return (
    <>
      {FAKE_ARR_EVENTS.map((evnt, idx) => {
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
