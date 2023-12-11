import { fireEvent, render, screen } from '@testing-library/react';
import Hero from './components/Hero.js';
import BookingForm from './components/BookingForm.js';

test('Is "Choose Date" in BookingForm', () => {
  const availableTimes = [["0", "0"], ["1", "1"]]
  render(<BookingForm availableTimes={availableTimes} />);
  const submitButton = screen.getByTestId("button");
  fireEvent.click(submitButton);
  expect(submitButton).toBeInTheDocument();
});

test('Rendered "Little Lemon" in Hero Component', () => {
  render(<Hero />);
  const nameElement = screen.getByText("Little Lemon");
  expect(nameElement).toBeInTheDocument();
});
