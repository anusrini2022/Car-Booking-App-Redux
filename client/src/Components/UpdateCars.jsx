import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateCar, viewCarsById } from "../slice/CarLists";

const UpdateCar = () => {
  const { id: carId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const carVal = useSelector((gs) => gs.carListReducer.car || {});

  const [carDetails, setCarDetails] = useState({
    carNumber:"",
    carName: "",
    carModel: "",
    pricePerDay: "",
    pricePerKm: "",
    seats: "",
    fuelType:"",
    transmission: "",
    availability:"",
    location: "",
    features:[],
    imageUrl: "",
  });

  useEffect(() => {
    if (carId) {
      dispatch(viewCarsById(carId));
    }
  }, [dispatch, carId]);

  useEffect(() => {
    if (carVal && Object.keys(carVal).length > 0) {
      setCarDetails({
        carName: carVal.carNumber|| "",
        carName: carVal.carName || "",
        carModel: carVal.carModel || "",
        pricePerDay: carVal.pricePerDay || "",
        pricePerKm: carVal.pricePerKm || "",
        seats: carVal.seats || "",
        fuelType:carVal.fuelType|| "",
        transmission: carVal.transmission || "",
        location: carVal.location || "",
        features:carVal.features ||  "",
        imageUrl: carVal.imageUrl || "",
      });
    }
  }, [carVal]);
  //console.log(carVal);
  const handleChange = (e) => {
   const name=e.target.name;
   const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
   //const value=e.target.value;

    setCarDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(carDetails);
    dispatch(updateCar({ id: carId, carDetails }));
   navigate("/managecars");
  };

  return (
    <div style={{ maxWidth: "600px", margin: "30px auto", padding: "20px" }}>
      <h1>Update Car</h1>
      <form onSubmit={handleSubmit} style={{ display: "grid", gap: "12px" }}>
        <label>
          Car Number
          <input type="text" name="carNumber" value={carDetails.carNumber} onChange={handleChange} />
        </label>
        <label>
          Car Name
          <input type="text" name="carName" value={carDetails.carName} onChange={handleChange} />
        </label>

        <label>
          Car Model
          <input type="text" name="carModel" value={carDetails.carModel} onChange={handleChange} />
        </label>

        <label>
          Price Per Day
          <input type="number" name="pricePerDay" value={carDetails.pricePerDay} onChange={handleChange} />
        </label>

        <label>
          Price Per KM
          <input type="number" name="pricePerKm" value={carDetails.pricePerKm} onChange={handleChange} />
        </label>

        <label>
          Seats
          <input type="number" name="seats" value={carDetails.seats} onChange={handleChange} />
        </label>
      
      <label>
           FuelType
          <input type="text" name="fuelType" value={carDetails.fuelType} onChange={handleChange} />
        </label>
        <label>
          Transmission
          <input type="text" name="transmission" value={carDetails.transmission} onChange={handleChange} />
        </label>

        <label>
          Location
          <input type="text" name="location" value={carDetails.location} onChange={handleChange} />
        </label>

        
       
        
        <div style={{display:"flex"}}>
            <label>Features</label>
        {carDetails.features.map((feature)=>(
            <div key={feature} style={{display:"flex"}}>
            <label>{feature}</label>
            <input type="checkbox" name={feature} checked={feature} onChange={handleChange}></input>
            </div>

        ))}
        </div>

        
 


        <label>
          Image URL
          <input type="text" name="imageUrl" value={carDetails.imageUrl} onChange={handleChange} />
        </label>

        <button type="submit">Update Car</button>
      </form>
    </div>
  );
};

export default UpdateCar;