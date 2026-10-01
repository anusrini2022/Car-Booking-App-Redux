import { useLocation, useNavigate } from "react-router-dom";

const Payment = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const bookingDetails = state?.bookingDetails;

  if (!bookingDetails) {
    return <h3>Booking details not found.</h3>;
  }

  const handlePayment = (event) => {
    event.preventDefault();

    navigate("/booking-confirmed", {
      state: { bookingDetails },
    });
  };

  return (
    <div className="payment">
      <h2>Payment</h2>
     

      <form onSubmit={handlePayment}>
        <label>CarName</label>
        <input type="text" value={bookingDetails.carName} readOnly></input>
        <label>CarModel</label>
        <input type="text" value= {bookingDetails.carModel} readOnly></input>
        <label>Card Number</label>   
        <input type="text" placeholder="Card number" required />
        <label>Expiry Date</label>
        <input type="text" placeholder="MM/YY" required />
        <label>Cvv</label>
        <input type="text" placeholder="CVV" required />

        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default Payment;