import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewBookings } from "../slice/CarBookingSlice";
import { showUsers,bookingDetails } from "../slice/UserSlice";
import "../customerdashboard.css";
const MyBookings=()=>{
    const dispatch=useDispatch();
     const bookings=useSelector((state)=>state. carbookingReducer.carbookings);
    const Name=useSelector((state)=>state.userReducer.userName);
    const userName=sessionStorage.getItem("userLoggedIn");
    const users = useSelector((state) => state.userReducer?.users || []);
    const customerName=useSelector((state)=>state.userReducer.userName);
    
    useEffect(()=>{
        dispatch(viewBookings());
        dispatch(showUsers())
    },[])

   const mybookings=bookings.filter((booking)=>booking.customerName==customerName);
   console.log(mybookings);
   useEffect(()=>{
    dispatch(bookingDetails(mybookings))
   },[mybookings])
    return (
        <div className="mybooking-container">
            <h3>My Bookings</h3>
            
                {mybookings.map((booking,index)=>(
                    <div className="mybookings" key={index}>
                    <p>CarName:{booking.carName}</p>
                    <p>CarModel:{booking.carModel}</p>
                     <p>PickupDate:{booking.pickupDate}</p>
                      <p>ReturnDate:{booking.returnDate}</p>
                       <p>location:{booking.location}</p>
                    </div>
                ))}
            
        </div>
    )
}

export default MyBookings;