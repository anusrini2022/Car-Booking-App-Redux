import { showUsers, userDetails } from "../slice/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { viewBookings } from "../slice/CarBookingSlice";
import { useEffect } from "react";
import "../customerdashboard.css";

 
const CustomerDashboard = () => {
    const bookings = useSelector(
        (state) => state.carbookingReducer.carbookings
    );
    const users = useSelector((state) => state.userReducer.users);
    const userName = sessionStorage.getItem("userLoggedIn");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(viewBookings());
        dispatch(showUsers());
    }, [dispatch]);

    const customer = users.find(
        (user) => user.userName === userName
    );

      useEffect(() => {
        if (customer) {
            dispatch(userDetails(customer.name));
        }
    }, [dispatch, customer]);
    if (!customer) {
        return <h3>Loading customer details...</h3>;
    }
     
    
    return (
        <div className="customer-container">
            <h1>Customer Dashboard</h1>
            <h3>Welcome, {customer.name}</h3>

            <div style={{ marginTop: "30px" }}>
                <h3>Recent Activity</h3>
                <ul>
                    <li>Booked Toyota Innova</li>
                    <li>Trip scheduled for 25 Aug</li>
                    <li>Payment completed</li>
                </ul>
            </div>
        </div>
    );
};

export default CustomerDashboard;