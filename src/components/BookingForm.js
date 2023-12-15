import { useState } from "react";
import fakeAPI from "../mockAPI.js";

export default function BookingForm( props ) {
  // Generate Today's Date
  const getTodaysDate = () => {
    const dateToday = new Date();
    const year = dateToday.getFullYear();
    const month = (dateToday.getMonth() + 1).toString().padStart(2, "0");
    const date = dateToday.getDate().toString().padStart(2, "0");
    const minDate = `${year}-${month}-${date}`;

    return minDate;
  }
  const todaysDate = getTodaysDate();

  // Delcaring state variables
  const [guests, setGuests] = useState("2");
  const [occasion, setOccasion] = useState("Birthday");
  const [time, setTime] = useState("init");
  const [date, setDate] = useState(todaysDate);

  // Prevent the screen from refreshing when submitting form
  const handleSubmit = (event) => {
    event.preventDefault()
    props.setBooking(fakeAPI.submitAPI());
  }

  // Give API selected date, recieve a list of times
  const listOfTimes = fakeAPI.fetchAPI(new Date(date));
  const times = listOfTimes.map( (e) => {
    return <option value={e} key={e}>{e}</option> // 'key' is there to shut up the error in the console.
  });

  // Rendering Stuff
  return (
    <form style={{ display: "grid", maxWidth: "200px", gap: "20px", paddingTop: "50px", margin: "0px auto" }} onSubmit={handleSubmit} >

      {/* --------------- Date Input --------------- */}
      <label htmlFor="res-date"><h3>Choose Date</h3></label>
      <input
        value={date}
        onChange={ (e) => { setDate(e.target.value) } }
        type="date"
        id="res-date"
        min={todaysDate}
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
