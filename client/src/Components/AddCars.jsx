import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addCar } from "../slice/CarLists";
import { useNavigate, useSearchParams } from "react-router-dom";
import "../cars.css"
const AddCars = () => {
const dispatch=useDispatch();
const navigate=useNavigate();
const messageVal=useSelector((gs)=>gs.carListReducer.message)
const [message,setMessage]=useState("");
    const [carDetails, setCarDetails] = useState({
        carName: "",
        carModel: "",
        pricePerDay: "",
        pricePerKm: "",
        seats: "",
        fuelType: "",
        transmission: "",
        availability: true,
        location: "",
        features:[],
        imageUrl: "",
    })
    const handleFeatureChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
        setCarDetails({
            ...carDetails,
            features: [...carDetails.features, value]
        });
    } else {
        setCarDetails({
            ...carDetails,
            features: carDetails.features.filter(
                (feature) => feature !== value
            )
        });
    }
};
    const handleChange = (e) => {
        const name = e.target.name;
        const value=e.target.value;
        setCarDetails({ ...carDetails, [name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(carDetails);
        dispatch(addCar(carDetails));
        setMessage(messageVal);
       // navigate("/managecars");
    }

    return (
        <div className="container">
            <h1>Add Cars</h1>
            <p>{message}</p>
            <form onSubmit={handleSubmit}>
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
                

                <label className="features">
                    Features:
                    <input type="checkbox" name="AC" checked={carDetails.feature} value="AC" onChange={handleFeatureChange}></input>
                    <label>AC</label>
                    <input type="checkbox" name="GPS" value="GPS" checked={carDetails.feature } onChange={handleFeatureChange}></input>
                    <label>GPS</label>
                    <input type="checkbox" name="Bluetooth" value="bluetooth" checked={carDetails.feature} onChange={handleFeatureChange}></input>
                    <label>Blue tooth</label>
                    <input type="checkbox" name="AirBag" value="AirBag" checked={carDetails.feature}  onChange={handleFeatureChange}></input>
                    <label>Air Bags</label>
                </label>
                <label>
                    Image URL
                    <input type="text" name="imageUrl" value={carDetails.imageUrl} onChange={handleChange} />
                </label>

                <button type="submit">Add Car</button>
            </form>
        </div>
    );
};

export default AddCars;
