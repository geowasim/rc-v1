import React, { useEffect } from "react";
import "./style.css";
import { useState } from "react";
import { useRef } from "react";
import dayjs from "dayjs";
function Dialog({
  setShowEvent,
  showEvent,
  setCurrentEvent,
  title,
  currentEvent,
  selectedDate,
  todos,
  setTodos,
  handleShowEvent,
}) {
  const [addTitle, setAddTitle] = useState("");

  console.log(selectedDate.date(), selectedDate.month(), selectedDate.year());

  function handleChange(e) {
    setAddTitle(e.target.value);
  }

  function handleSubmit(e) {
    const newTodos = {
      id: new Date().valueOf(),
      date: dayjs(dayjs(selectedDate).format("YYYY MM DD")),
      title: `${addTitle}`,
      color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
      background: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
      message: "test",
    };
    e.preventDefault();
    setTodos([...todos, newTodos]);
    setAddTitle("");
    handleShowEvent(showEvent);
  }

  const inputEventRef = useRef();

  return (
    <div className="dialog-container">
      <div className="box">
        <div className="dialog-box">
          <h3>Add event</h3>{" "}
          <p className="title-event">
            {title === undefined ? "Add event" : "Edit Event"}
          </p>
          <p>{title}</p>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              ref={inputEventRef}
              type="text"
              name="title"
              value={addTitle}
              onChange={(e) => handleChange(e)}
              required
            />
            <button
              type="submit"
              onClick={() => {
                // setCurrentEvent(null);
              }}
              className="yes"
            >
              Save
            </button>
          </form>
          <div className="action">
            <button
              onClick={() => {
                setShowEvent(false);
                // setCurrentEvent(null);
              }}
              className="no"
            >
              Cancel{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dialog;

/**
 *  {showEvent && ( //show events onClick on event
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
 */
