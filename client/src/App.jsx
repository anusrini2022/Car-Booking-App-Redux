import './App.css'
import Home from './Components/Home'
import { BrowserRouter, NavLink, Outlet, Route, Routes } from 'react-router-dom'
import ViewBookings from './Components/ViewBookings'
import Bookings from './Components/Bookings'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import CustomerDadhboard from './Components/CustomerDashboard'
import AdminDashboard from './Components/AdminDashboard'
import ProtectedRoutes from './Components/ProtectedRoutes'
import Logout from './Components/Logout'
import ViewCars from './Components/ViewCars'
import AboutPage from './Components/AboutPage'
import ContactPage from './Components/ContactPage'
import ManageCars from './Components/ManageCars'
import UpdateCar from './Components/UpdateCars'
import MyBookings from './Components/MyBookings'
import Profile from './Components/Profile'
import Users from './Components/Users'
import AddCars from './Components/AddCars'
import Payment from './Components/Payment';
import BookingConfirmed from "./Components/BookingConfirmed";

const PublicLayout = () => (
  <div>
    <nav >
      <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
      <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
      <NavLink to="/viewcars" className={({ isActive }) => isActive ? 'active' : ''}>View Cars</NavLink>
      <NavLink to="/login" className={({ isActive }) => isActive ? 'active' : ''}>Login</NavLink>
      <NavLink to="/logout" className={({ isActive }) => isActive ? 'active' : ''}>Logout</NavLink>
    </nav>
    <Outlet />
  </div>
)

const CustomerLayout = () => (
  <div>
    <nav style={{ display: 'flex', gap: '20px', padding: '16px 24px', background: '#391130', borderBottom: '1px solid #ddd' }}>
      <NavLink to="/customerdashboard" className={({ isActive }) => isActive ? 'active' : ''}>Dashboard</NavLink>
      <NavLink to="/myBookings" className={({ isActive }) => isActive ? 'active' : ''}>My Bookings</NavLink>
      <NavLink to="/profile" className={({ isActive }) => isActive ? 'active' : ''}>Profile</NavLink>
      <NavLink to="/bookacar" className={({ isActive }) => isActive ? 'active' : ''}>Book a Car</NavLink>
      <NavLink to="/logout" className={({ isActive }) => isActive ? 'active' : ''}>Logout</NavLink>
    </nav>
    <Outlet />
  </div>
)

const AdminLayout = () => (
  <div>
    <nav style={{ display: 'flex', gap: '20px', padding: '16px 24px', background: '#806d7c', borderBottom: '1px solid #ddd' }}>
      <NavLink to="/admindashboard" className={({ isActive }) => isActive ? 'active' : ''}>Admin Dashboard</NavLink>
      <NavLink to="/managecars" className={({ isActive }) => isActive ? 'active' : ''}>Manage Cars</NavLink>
      <NavLink to="/viewbookings" className={({ isActive }) => isActive ? 'active' : ''}>Bookings</NavLink>
      <NavLink to="/users" className={({ isActive }) => isActive ? 'active' : ''}>Users</NavLink>
      <NavLink to="/logout" className={({ isActive }) => isActive ? 'active' : ''}>Logout</NavLink>
    </nav>
    <Outlet />
  </div>
)

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/viewcars" element={<ViewCars />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/logout" element={<Logout />} />
        </Route>

        <Route element={<CustomerLayout />}>
          <Route path="/customerdashboard" element={<ProtectedRoutes><CustomerDadhboard /></ProtectedRoutes>} />
          <Route path="/profile" element={<ProtectedRoutes><Profile /></ProtectedRoutes>} />
          <Route path="/myBookings" element={<MyBookings/>} />
           <Route path="/bookacar" element={<ViewCars/>} />
           <Route path="/payment" element={<Payment />} />
           <Route path="/booking-confirmed" element={<BookingConfirmed />} />
        </Route>

        <Route element={<AdminLayout />}>
          <Route path="/admindashboard" element={<ProtectedRoutes><AdminDashboard /></ProtectedRoutes>} />
          <Route path="/managecars" element={<ProtectedRoutes><ManageCars/></ProtectedRoutes>} />
          <Route path="/updatecar/:id" element={<UpdateCar/>} />
          {/* <Route path="/allbookings" element={<ProtectedRoutes><div>All Bookings Page</div></ProtectedRoutes>} /> */}
           <Route path="/viewbookings" element={<ProtectedRoutes><ViewBookings /></ProtectedRoutes>} />
          <Route path="/users" element={<ProtectedRoutes><Users/></ProtectedRoutes>} />
          <Route path="/addcars" element={<ProtectedRoutes><AddCars/></ProtectedRoutes>}></Route>
        </Route>

        <Route path="/bookings/:id" element={<Bookings />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
