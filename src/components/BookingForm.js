import { useState, useEffect } from "react";

export default function BookingForm( availableTimes ) {
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("2");
  const [occasion, setOccasion] = useState("Birthday");
  const [time, setTime] = useState("0630")

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event)
    console.log("I'm in here doing thangs...")
  }

  const timeSlots = availableTimes.availableTimes;
  const times = timeSlots.map( (e) => {
    const timeKey = e[0];
    const timeValue = e[1];
    return(<option value={timeKey}>{timeValue}</option>);
  });

  return (
    <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }} onSubmit={handleSubmit} >
      {/* --- Date Input --- */}
      <label htmlFor="res-date"><h3>Choose Date</h3></label>
      <input
        value={date}
        onChange={ (e) => setDate(e.target.value) }
        type="date"
        id="res-date"
      />
      {/* --- Time Input --- */}
      <label htmlFor="res-time"><h3>Choose Time</h3></label>
      <select 
        id="res-time"
        value={time}
        onChange={ (e) => setTime(e.target.value) }
      >
        {times}
      </select>
      {/* --- Guests Input --- */}
      <label htmlFor="guests"><h3>Number of Guests</h3></label>
      <input 
        type="number"
        placeholder={guests}
        min="1"
        max="10"
        id="guests"
        onChange={ (e) => setGuests(e.target.value) }
      />
      {/* --- Occasion Input --- */}
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
      {/* --- Submit --- */}
      <input
        type="submit"
        value="Make Your Reservation" />
    </form>
  );
};
