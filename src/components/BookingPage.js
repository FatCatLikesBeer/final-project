import BookingForm from './BookingForm.js'
import { useState } from 'react';

export default function BookingPage( props ) {
  const [booking, setBooking] = useState(false);

  const Confirmed = () => {
    return (
      <>
        <h2 style={{paddingTop: "50px"}}>Booking Confirmed</h2>
        <h3>Thank You</h3>
      </>
    );
  }

  const BookingContainer = () => {
    return booking ?
      <Confirmed /> : 
      <BookingForm setBooking={setBooking} />
  }

  return (
    <BookingContainer />
  )
}
