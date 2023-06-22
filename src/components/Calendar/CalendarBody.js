// import moment from "moment/moment";
import { useEffect, useState } from "react";
import { compareTwoDates, generateDate } from "../../utils/arrayOfDate";
import CalendarDays from "./CalendarDays";
import { FAKE_ARR_EVENTS } from "../../data/day-month";
import TotalDays from "./TotalDays";

const CalendarBody = ({ currentDate, defaultDate }) => {
  let month = currentDate.month();
  let year = currentDate.year();
  let totalDays = generateDate(month, year);

  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [calendarEvent, setCalendarEvent] = useState(null);
  const [showEvent, setShowEvent] = useState(false);

  return (
    <>
      {showEvent && ( //show events onClick on event
        <div className="test_dialog">
          <p>{calendarEvent.id}</p>
          <p>{`${
            calendarEvent.title
              ? "Edit " + calendarEvent.title
              : "Add new event"
          }`}</p>

          <button
            onClick={() => {
              setShowEvent(!showEvent);
              // setCalendarEvent("");
            }}
          >
            mmmm
          </button>
        </div>
      )}
      <div role="table" className="table">
        <div className="thead">
          <CalendarDays defaultDate={defaultDate} />
        </div>
        <div className="tbody">
          <TotalDays
            totalDays={totalDays}
            setCalendarEvent={setCalendarEvent}
            setShowEvent={setShowEvent}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />

          {/* <EventsComponents selectEventHandler={selectEventHandler} /> */}
        </div>
      </div>
    </>
  );
};

export default CalendarBody;
