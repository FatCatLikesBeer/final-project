import { useState } from "react";

export default function BookingForm() {
  const [date, setDate] = useState();
  const [time, setTime] = useState("6:00pm");
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState("Birthday");

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event)
    console.log("I'm in here doing thangs...")
  }

  return (
    <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }} onSubmit={handleSubmit} >
      <label htmlFor="res-date">Choose Date</label>
      <input
        value={date}
        onChange={ (e) => setDate(e.target.value) }
        type="date"
        id="res-date"
      />
      <label htmlFor="res-time">Choose Time</label>
      <select 
        id="res-time"
        value={time}
        onChange={ (e) => setTime(e.target.value) }
      >
        <option value="5:00pm">5:00 pm</option>
        <option value="6:00pm">6:00 pm</option>
        <option value="7:00pm">7:00 pm</option>
        <option value="8:00pm">8:00 pm</option>
        <option value="9:00pm">9:00 pm</option>
        <option value="10:00pm">10:00 pm</option>
      </select>
      <label htmlFor="guests">Number of Guests</label>
      <input 
        type="number"
        placeholder={guests}
        min="1"
        max="10"
        id="guests"
        onChange={ (e) => setGuests(e.target.value) }
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={ (e) => setOccasion(e.target.value) }
      >
        <option value="Birthday">Birthday</option>
        <option value="Engagement">Engagement</option>
        <option value="Graduation">Graduation</option>
        <option value="Anniversary">Anniversary</option>
        <option value="Promotion">Promotion</option>
      </select>
      <input
        type="submit"
        value="Make Your Reservation" />
    </form>
  );
};
