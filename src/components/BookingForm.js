import { useState } from "react";

export default function BookingForm( props ) {
  // Delcaring state variables
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("2");
  const [occasion, setOccasion] = useState("Birthday");
  const [time, setTime] = useState("init");

  // Prevent the screen from refreshing when submitting form
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  // Splitting props to unique variables
  const restrictTimes = props.dispatch;
  const timeSlots = props.availableTimes !== 'undefined' ? props.availableTimes : [["", ""]];

  // Parsing the list of available times to something react can render
  // This mapping causes error in the console and in the testing library.
  const times = timeSlots.map( (e) => {
    const timeKey = e[0];
    const timeValue = e[1];
    const keyId = timeKey;
    return(<option key={keyId} value={timeKey}>{timeValue}</option>);
  });

  // Takes the date selection, and sends one value to the main
  // component and returns another value back to local state.
  const dayParser = (selection) => {
    const newDay = new Date(selection);

    let selectedDay = {};

    if (newDay.getDay() === 0 || newDay.getDay() > 4) {
      selectedDay = {type: "weekend"};
    } else if ( newDay.getDay() > 0 && newDay.getDay() < 5 ) {
      selectedDay = {type: "weekday"}
    } else {
      selectedDay = {type: ""};
      setTime("");
    }
    restrictTimes(selectedDay);
    return selection;
  }

  // Rendering Shit
  return (
    <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }} onSubmit={handleSubmit} >

      {/* --------------- Date Input --------------- */}
      <label htmlFor="res-date"><h3>Choose Date</h3></label>
      <input
        value={date}
        onChange={ (e) => setDate(dayParser(e.target.value)) }
        type="date"
        id="res-date"
      />

      {/* --------------- Time Input --------------- */}
      <label htmlFor="res-time"><h3>Choose Time</h3></label>
      <select 
        id="res-time"
        value={time}
        onChange={ (e) => setTime(e.target.value) }
      >
        {times}
      </select>

      {/* --------------- Guests Input --------------- */}
      <label htmlFor="guests"><h3>Number of Guests</h3></label>
      <input 
        type="number"
        placeholder={guests}
        min="1"
        max="10"
        id="guests"
        onChange={ (e) => setGuests(e.target.value) }
      />

      {/* --------------- Occasion Input --------------- */}
      <label htmlFor="occasion"><h3>Occasion</h3></label>
      <select
        id="occasion"
        value={occasion}
        onChange={ (e) => setOccasion(e.target.value) }
      >
        <option value="Birthday">Birthday</option>
        <option value="Engagement">Engagement</option>
        <option value="Graduation">Graduation</option>
        <option value="Anniversary">Anniversary</option>
        <option value="New Job">New Job</option>
      </select>

      {/* --------------- Submit --------------- */}
      <input
        data-testid="button"
        type="submit"
        value="Book Now" />
    </form>
  );
};
