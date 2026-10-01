import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBooking, viewBookings } from "../slice/CarBookingSlice";
import  "../viewbooking.css";
import { viewCarsById ,viewCars} from "../slice/CarLists";

const ViewBookings = () => {
    const dispatch = useDispatch();
    const loadingValue = useSelector((gs) => gs.carbookingReducer.loading);
    const messageVal = useSelector((gs) => gs.carbookingReducer.message);
    const carBookingData = useSelector((gs) => gs.carbookingReducer.carbookings || []);
    const car=useSelector((gs)=>gs.carListReducer.car);
    const cars=useSelector((gs)=>gs.carListReducer.cars);
    const [message,setMessage]=useState("");
    useEffect(() => {
        dispatch(viewBookings());
    }, [message]);
    
    const confirmBooking=(id,status)=>{
        
        const result=dispatch(updateBooking({id:id,status:"confirmed"}));
        setMessage(result)
   
    }
    
    return (
        <div>
            <h1>View Bookings</h1>
            {loadingValue && <p>Loading...</p>}
             {carBookingData.length > 0 ? (
                <table border="1">
                    <thead>
                        <tr>
                            <th>CustomerName</th>
                            <th>CarName</th>
                            <th>CarModel</th>
                            <th>ContactNumber</th>
                            <th>PickupDate</th>
                            <th>Return Date</th>
                            <th>status</th>
                            <th>Location</th>
                            <th>ACtions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carBookingData.map((booking, index) => (
                            <tr key={index}>
                                <td>{booking.customerName}</td>
                                <td>{booking.carName}</td>
                                <td>{booking.carModel}</td>
                                <td>{booking.contactNumber}</td>
                                <td>{booking.pickupDate}</td>
                                <td>{booking.returnDate}</td>
                                <td>{booking.status}</td>
                                <td>{booking.location}</td>
                                <td><button className="confirm-btn" onClick={()=>confirmBooking(booking._id,booking.status)}>Confirm</button></td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            ) : (
                !loadingValue && <p>No bookings found.</p>
            )}
        </div>
    );
};

export default ViewBookings;