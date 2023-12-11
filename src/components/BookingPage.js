import BookingForm from './BookingForm.js'

export default function BookingPage( props ){
  return <BookingForm dispatch={props.dispatch} availableTimes={props.availableTimes} />
}
