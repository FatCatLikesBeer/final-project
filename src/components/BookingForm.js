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
  const [date, setDate] = useState(todaysDate);
  const [time, setTime] = useState("--- Select a Time ---");
  const [guests, setGuests] = useState("0");
  const [occasion, setOccasion] = useState("init");
  const [timeError, setTimeError] = useState({
    isFocused: false,
    isBlured: false,
  })
  const [occasionError, setOccasionError] = useState({
    isFocused: false,
    isBlured: false,
  })
  const [guestsError, setGuestsError] = useState({
    isFocused: false,
    isBlured: false,
  })
  const [formIsValid, setFormIsValid] = useState(true)

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

  const handleTimeFocused = () => {
    setTimeError({...timeError, isFocused: true});
  }

  const handleTimeBlured = () => {
    setTimeError({...timeError, isBlured: true});
  }

  const handleOccasionFocused = () => {
    setOccasionError({...occasionError, isFocused: true})
  }

  const handleOccasionBlured = () => {
    setOccasionError({...occasionError, isBlured: true})
  }

  const handleGuestsFocused = () => {
    setGuestsError({...guestsError, isFocused: true})
  }

  const handleGuestsBlured = () => {
    setGuestsError({...guestsError, isBlured: true})
  }

  const formValidator = () => {
    if (time == "--- Select a Time ---") {setFormIsValid(true)}
    else if (guests <= 0) {setFormIsValid(true)}
    else if (guests > 10) {setFormIsValid(true)}
    else if (occasion == "init") {setFormIsValid(true)}
    else {setFormIsValid(false)}
  }
  // Rendering Stuff
  return (
    <>
      <form style={{ display: "grid", maxWidth: "200px", gap: "20px", paddingTop: "50px", margin: "0px auto" }} onSubmit={handleSubmit} >

        {/* --------------- Date Input --------------- */}
        <label htmlFor="res-date"><h3>Choose Date</h3></label>
        <input
          value={date}
          onChange={ (e) => { setDate(e.target.value); setTime("--- Select a Time ---") } }
          type="date"
          id="res-date"
          min={todaysDate}
        />

        {/* --------------- Time Input --------------- */}
        <label htmlFor="res-time">{timeError.isFocused && timeError.isBlured && time == "--- Select a Time ---" ? <h3 style={{color: "red"}}>*Choose Time*</h3> : <h3>Choose Time</h3>}</label>
        <select 
          id="res-time"
          value={time}
          onChange={ (e) => setTime(e.target.value) }
          onFocus={handleTimeFocused, formValidator}
          onBlur={handleTimeBlured, formValidator}
        >
          {times}
        </select>

        {/* --------------- Guests Input --------------- */}
        <label htmlFor="guests">{guestsError.isFocused && guestsError.isBlured && (guests <= 0 || guests > 10) ? <h3 style={{color: "red"}}>*Number of Guests*</h3> : <h3>Number of Guests</h3>}</label>
        <input 
          type="number"
          placeholder={guests}
          min="1"
          max="10"
          id="guests"
          onChange={ (e) => setGuests(e.target.value) }
          onFocus={handleGuestsFocused, formValidator}
          onBlur={handleGuestsBlured, formValidator}
        />
        {guests > 10 && <p style={{color: "red"}}>We can not accept parties with more than guests.</p>}

        {/* --------------- Occasion Input --------------- */}
        <label htmlFor="occasion">{occasionError.isFocused && occasionError.isBlured && occasion == "init" ? <h3 style={{color: "red"}}>*Occasion*</h3> : <h3>Occasion</h3>}</label>
        <select
          id="occasion"
          value={occasion}
          onChange={ (e) => setOccasion(e.target.value) }
          onFocus={handleOccasionFocused, formValidator}
          onBlur={handleOccasionBlured, formValidator}
        >
          <option value="init">--- Select an Occasion ---</option>
          <option value="Birthday">Birthday</option>
          <option value="Engagement">Engagement</option>
          <option value="Graduation">Graduation</option>
          <option value="Anniversary">Anniversary</option>
          <option value="New Job">New Job</option>
        </select>

        {/* --------------- Submit --------------- */}
        <button data-testid="button" type="submit" style={{display: "center", margin: "0px auto"}} disabled={formIsValid}>Book Now</button>
      </form>
    </>
  );
};
