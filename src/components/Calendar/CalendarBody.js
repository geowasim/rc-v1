// import moment from "moment/moment";
import { useEffect, useState } from "react";
import { generateDate } from "../../utils/arrayOfDate";
import WeekDaysNames from "./WeekDaysNames";
import TotalDays from "./TotalDays";
import Dialog from "../Events/Dialog";

const CalendarBody = ({ currentDate, defaultDate }) => {
  let month = currentDate.month();
  let year = currentDate.year();
  let totalDays = generateDate(month, year);

  const [selectedDate, setSelectedDate] = useState("");
  const [calendarEvent, setCalendarEvent] = useState(null);
  const [showEvent, setShowEvent] = useState(false);
  const [todos, setTodos] = useState([]);

  const handleShowEvent = (v) => {
    setShowEvent(!v);
  };

  return (
    <>
      {showEvent && (
        <Dialog
          setShowEvent={setShowEvent}
          showEvent={showEvent}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          todos={todos}
          setTodos={setTodos}
          handleShowEvent={handleShowEvent}
        />
      )}

      <div role="table" className="table">
        <div className="thead">
          <WeekDaysNames defaultDate={defaultDate} />
        </div>
        <div className="tbody">
          <TotalDays
            totalDays={totalDays}
            setCalendarEvent={setCalendarEvent}
            setShowEvent={setShowEvent}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            todos={todos}
          />

          {/* <EventsComponents selectEventHandler={selectEventHandler} /> */}
        </div>
      </div>
    </>
  );
};

export default CalendarBody;
