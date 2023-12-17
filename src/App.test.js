import { fireEvent, render, screen } from '@testing-library/react';
import Hero from './components/Hero.js';
import BookingForm from './components/BookingForm.js';

test('Is "Choose Date" in BookingForm', () => {
  render(<BookingForm />);
  const chooseDate = screen.getByLabelText("Choose Date");
  expect(chooseDate).toBeInTheDocument();
});

test('Rendered "Little Lemon" in Hero Component', () => {
  render(<Hero />);
  const nameElement = screen.getByText("Little Lemon");
  expect(nameElement).toBeInTheDocument();
});

test('Invalid Time Choice', () => {
  render(<BookingForm />);
  const guests = screen.getByLabelText("Number of Guests");
  const occasion = screen.getByLabelText("Occasion");
  const button = screen.getByTestId("button")

  fireEvent.change(guests, { target: { value: 2 } });
  fireEvent.change(occasion, { target: { value: "Birthday" } });

  fireEvent.click(button);
  expect(button).toBeDisabled();
})

test('Invalid Guest Choice', () => {
  render(<BookingForm />);
  const time = screen.getByLabelText("Choose Time");
  const occasion = screen.getByLabelText("Occasion");
  const button = screen.getByTestId("button")

  fireEvent.change(time, { target: { value: "15:00" } });
  fireEvent.change(occasion, { target: { value: "Birthday" } });

  fireEvent.click(button);
  expect(button).toBeDisabled();
})

test('Invalid Occasion Choice', () => {
  render(<BookingForm />);
  const time = screen.getByLabelText("Choose Time");
  const guests = screen.getByLabelText("Number of Guests");
  const button = screen.getByTestId("button")

  fireEvent.change(guests, { target: { value: 2 } });
  fireEvent.change(time, { target: { value: "15:00" } });

  fireEvent.click(button);
  expect(button).toBeDisabled();
})

test('Valid Form', () => {
  const SetBooking = () => true;
  render(<BookingForm setBooking={SetBooking} />);

  const time = screen.getByLabelText("Choose Time");
  const guests = screen.getByLabelText("Number of Guests");
  const occasion = screen.getByLabelText("Occasion");
  const button = screen.getByTestId("button")

  fireEvent.change(time, { target: { value: "15:00"} });
  fireEvent.change(guests, { target: { value: 2 } });
  fireEvent.change(occasion, { target: { value: "Birthday" } });

  expect(button).not.toBeDisabled();
})

