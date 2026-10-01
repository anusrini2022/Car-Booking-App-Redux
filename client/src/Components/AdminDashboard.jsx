import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showUsers } from "../slice/UserSlice";
import { viewCars } from "../slice/CarLists";
import { viewBookings } from "../slice/CarBookingSlice";
import "../home.css"
import "../admindashboard.css"

const AdminDashboard = () => {
    const dispatch=useDispatch();
    const customers=useSelector((state)=>state.userReducer.users || []);
    const cars=useSelector((state)=>state.carListReducer.cars || []);
    const bookings=useSelector((state)=>state. carbookingReducer.carbookings || []);
   
    const pending=bookings.filter((booking)=>{
        return booking.status==="pending"
    });
   
    useEffect(()=>{
     dispatch(showUsers());
     dispatch(viewCars());
     dispatch(viewBookings())
    },[dispatch]);
   const totalCustomers=customers.length;
   const carsAvailable=cars.length;
   console.log(bookings);
   const noOfBookings=bookings.length;
  const pendingOrder=pending.length;
    return (
        <div style={{ padding: "20px" }}>
            <h1>Admin Dashboard</h1>

            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginTop: "20px" }}>
                <div className="card">
                    <h4>Total Customers</h4>
                    <p>{totalCustomers}</p>
                </div>

                <div className="card">
                    <h4>Total Bookings</h4>
                    <p>{noOfBookings}</p>
                </div>

                <div className="card">
                    <h4>Pending Orders</h4>
                    <p>{pendingOrder}</p>
                </div>

                <div className="card">
                    <h4>Available Cars</h4>
                    <p>{carsAvailable}</p>
                </div>
            </div>

            <div className="card">
                <h3>Management Actions</h3>
                <ul>
                    <li>Manage Cars</li>
                    <li>Approve Bookings</li>
                    <li>View Customer List</li>
                    <li>Generate Reports</li>
                </ul>
            </div>
        </div>
    );
};

export default AdminDashboard;