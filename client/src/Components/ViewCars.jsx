import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { viewCars } from "../slice/CarLists";
import { Link } from "react-router-dom";


const ViewCars = () => {


  const name = useSelector((gs) => gs.carbookingReducer.name);
  const messageVal = useSelector((gs) => gs.carListReducer.message);
  const loadingVal = useSelector((gs) => gs.carListReducer.loading);
  const carVal = useSelector((gs) => gs.carListReducer.cars);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(viewCars());
  }, [dispatch]);

  const getImageSrc = (imageUrl) => {
    if (!imageUrl) return "";

    const normalizedUrl = imageUrl.replace(/\\/g, "/");

    if (/^https?:\/\//i.test(normalizedUrl)) {
      return normalizedUrl;
    }

    return `http://localhost:3000/${normalizedUrl.replace(/^\/+/, "")}`;
  };

  return (
    <div>


      <div className="car-container">
        {carVal && carVal.length > 0 ? (
          carVal.map((car, index) => (
            <div key={car._id || car.id || index} className="cart">
              <div className="image">
                <img
                  src={`http://localhost:3000${car.imageUrl}`}
                  //{getImageSrc(car.imageUrl)}
                  alt={car.carName}
                />
              </div>
              <div className="details">
                <h4>{car.carName}</h4>
                Model: {car.carModel}
                <p>Price: {car.pricePerKm}</p>
                <p>Seats: {car.seats}</p>
                <p>Type: {car.fuelType}</p>
                <Link className="book-btn" to={`/bookings/${car._id || car.id}`}>Book Now</Link>
              </div>
            </div>
          ))
        ) : (
          <p>No cars available</p>
        )}
      </div>
    </div>
  );
};
export default ViewCars;
