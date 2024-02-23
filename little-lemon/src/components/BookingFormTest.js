import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import BookingForm from "./BookingForm";

test("Your Name testing", async () => {
  render(<BookingForm />);
  const nameElement = screen.getByText(/Naomi Ishida/i);
  expect(nameElement).toBeInTheDocument();
});

test("Phone number testing", async () => {
  render(<BookingForm />);
  const nameElement = screen.getByText(/0123456789/i);
  expect(nameElement).toBeInTheDocument();
});
