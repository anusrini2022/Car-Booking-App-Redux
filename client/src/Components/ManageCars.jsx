import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCar, viewCars } from "../slice/CarLists";
import { Link } from "react-router-dom";

const ManageCars = () => {
    const dispatch = useDispatch();

    const messageVal = useSelector((gs) => gs.carListReducer.message);
    const loadingVal = useSelector((gs) => gs.carListReducer.loading);
    const carVal = useSelector((gs) => gs.carListReducer.cars || []);

    useEffect(() => {
        dispatch(viewCars());
    }, [dispatch]);

    const handleDelete = async (id) => {
        console.log(id);
        let confirmdelete=confirm("Are you sure you want to delete")
        if(confirmdelete)
        {
        await dispatch(deleteCar(id));
        dispatch(viewCars());
        }
        else{
            return
        }
    };
  console.log(carVal);
    return (

        <div>
            <h1>ManageCars</h1>

            <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>CarNumber</th>
                        <th>CarName</th>
                        <th>Model</th>
                        <th>Price</th>
                        <th>PricePerDay</th>
                        <th>Location</th>
                        <th>seats</th>
                        <th>Transmission</th>
                        <th>Availability</th>
                        <th colSpan={2}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {carVal &&carVal.map((car, index) => (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{car.carNumber}</td>
                            <td>{car.carName}</td>
                            <td>{car.carModel}</td>
                            <td>{car.pricePerKm}</td>
                            <td>{car.pricePerDay}</td>
                             <td>{car.location}</td>
                            <td>{car.seats}</td>
                             <td>{car.transmission}</td>
                             <td>{car.availability?"available":"not available"}</td>
                            <td><Link className="update-btn" to={`/updatecar/${car._id}`}>Update</Link></td>
                            <td>
                                <button type="button" className="delete-btn" onClick={() => handleDelete(car._id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}

                </tbody>
             </table>
               <Link className="add-btn" to="/addcars">Add a New Car</Link>
        </div>
    )
}
export default ManageCars;