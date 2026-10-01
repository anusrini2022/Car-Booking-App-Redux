import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { viewCarsById } from "../slice/CarLists";
import "../booking.css";
import { getBooking } from "../slice/CarBookingSlice";
import { Link } from "react-router-dom";

const Bookings = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const carVal = useSelector((state) => state.carListReducer.car);
  const customerName = useSelector((state) => state.userReducer.userName);

  const [bookingDetails, setBookingDetails] = useState({
    carId: id || "",
    customerName: "",
    carName: "",
    carModel: "",
    contactNumber: "",
    pickupDate: "",
    returnDate: "",
    location: "",
  });

  useEffect(() => {
    if (id) {
      dispatch(viewCarsById(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (carVal) {
      setBookingDetails((previous) => ({
        ...previous,
        carId: id || previous.carId,
        customerName: customerName || "",
        carName: carVal.carName || "",
        carModel: carVal.carModel || "",
      }));
    }
  }, [carVal, customerName]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setBookingDetails((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  try {
      // Save booking details before redirecting to payment
      dispatch(getBooking(bookingDetails));

      navigate("/payment", {
        state: { bookingDetails },
      });
    } catch (error) {
      console.error("Booking failed:", error);
    }
  };
  
  const  cancelPayment=()=>{
    alert("Areyou sure you want to cancel?")
   setBookingDetails(
    {
    carId: id || "",
    customerName: "",
    carName: "",
    carModel: "",
    contactNumber: "",
    pickupDate: "",
    returnDate: "",
    location: "",
  }
  
   )
  }

  return (
    <div className="booking">
      <h3>Booking
          <Link className="add-btn" to="/" >Home</Link>
      </h3>
     
      <form onSubmit={handleSubmit} className="booking-form">
        <label>Customer Name</label>
        <input
          type="text"
          name="customerName"
          value={bookingDetails.customerName}
          onChange={handleChange}
        />

        <label>Car Name</label>
        <input
          type="text"
          name="carName"
          value={bookingDetails.carName}
          readOnly
        />

        <label>Car Model</label>
        <input
          type="text"
          name="carModel"
          value={bookingDetails.carModel}
          readOnly
        />

        <label>Contact Number</label>
        <input
          type="text"
          name="contactNumber"
          value={bookingDetails.contactNumber}
          onChange={handleChange}
          required
        />

        <label>Pickup Date</label>
        <input
          type="date"
          name="pickupDate"
          value={bookingDetails.pickupDate}
          onChange={handleChange}
          required
        />

        <label>Return Date</label>
        <input
          type="date"
          name="returnDate"
          value={bookingDetails.returnDate}
          onChange={handleChange}
          required
        />

        <label>Location</label>
        <input
          type="text"
          name="location"
          value={bookingDetails.location}
          onChange={handleChange}
          required
        />

        <input type="submit" value="Continue to Payment" />
        <button className="delete-btn" onClick={cancelPayment} type="reset">Cancel Payment</button>
       
      </form>
    </div>
  );
};

export default Bookings;