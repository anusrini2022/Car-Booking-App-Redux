import { useLocation, useNavigate } from "react-router-dom";

const BookingConfirmed = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const booking = state?.bookingDetails;

  return (
    <div className="booking-confirmed">
      <h2>Payment Successful</h2>
      <h3>Booking Confirmed</h3>

      {booking && (
        <>
          <p>Car: {booking.carName}</p>
          <p>Model: {booking.carModel}</p>
          <p>Pickup Date: {booking.pickupDate}</p>
          <p>Return Date: {booking.returnDate}</p>
          <p>Location: {booking.location}</p>
        </>
      )}

      <button onClick={() => navigate("/customerdashboard")}>
        Go to Dashboard
      </button>
    </div>
  );
};

export default BookingConfirmed;