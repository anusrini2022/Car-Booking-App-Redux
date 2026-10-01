import React from "react";
import "../home.css";
import { useNavigate, NavLink, Outlet } from "react-router-dom";

const Home = () => {
  const navigate=useNavigate();

  const handleBookNow = () => {
  const user = sessionStorage.getItem("userLoggedIn");
  if (user) {
    navigate("/viewcars");
  } else {
    navigate("/login");
  }
};
  return (
    <div style={{ padding: "30px", fontFamily: "Arial, sans-serif" }}>
      
      <section
        style={{
          background: "linear-gradient(to right, #e3f2fd, #f5f5f5)",
          padding: "40px",
          borderRadius: "12px",
        }}
      >
        <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
          Rent a Car in Minutes
        </h1>
        <p style={{ fontSize: "18px", maxWidth: "600px" }}>
          Book your favorite car for city rides, business travel, or weekend trips.
          Fast booking, affordable prices, and trusted service.
        </p>

        <div style={{ marginTop: "20px" }}>
          <button
            style={{
              background: "#1976d2",
              color: "white",
              border: "none",
              padding: "12px 24px",
              borderRadius: "8px",
              marginRight: "10px",
              cursor: "pointer",
            }}
             onClick={handleBookNow}
          >
            Book Now
          </button>

          <button
            style={{
              background: "white",
              color: "#1976d2",
              border: "1px solid #1976d2",
              padding: "12px 24px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/viewcars")}
          >
            View Cars
          </button>
        </div>
      </section>

      <section className="card">
        <h2>Why Choose Us?</h2>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <div className="card">
            <h3>Easy Booking</h3>
            <p>Quick and simple booking process from your laptop or phone.</p>
          </div>

          <div className="card">
            <h3>Wide Variety</h3>
            <p>Choose from economy, SUV, luxury, and family-friendly vehicles.</p>
          </div>

          <div className="card">
            <h3>Affordable Rates</h3>
            <p>Transparent pricing with no hidden charges.</p>
          </div>
        </div>
      </section>

      <section className="card" style={{ marginTop: "40px" }}>
        <h2>Popular Car Types</h2>
        <ul>
          <li>Sedans</li>
          <li>SUVs</li>
          <li>Luxury Cars</li>
          <li>Family Cars</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;