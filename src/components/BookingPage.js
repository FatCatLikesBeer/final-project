import BookingForm from './BookingForm.js'

export default function BookingPage( availableTimes ){
  return <BookingForm availableTimes={availableTimes.availableTimes} />
}
