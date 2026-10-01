const CarLists=require("../model/carListModel");

const  createCarLists=async(car)=>{
    return await CarLists.create(car)
}
const  showCarLists=async()=>{
    return await CarLists.find()
}

const  showCarListsById=async(id)=>{
    return await CarLists.findById(id);
}
const checkCarsAvailability=async(carNo)=>{
    return await CarLists.findOne({ carNumber: carNo, availability: true })
}
const showCarsByNameAndAvailability = async (carName, availability, carNumber) => {
    const filter = {};

    if (carNumber) {
        filter.carNumber = carNumber;
    }

    if (carName) {
        filter.carName = carName;
    }

    if (availability !== undefined) {
        filter.availability = availability === true || availability === "true";
    }

    return await CarLists.find(filter);
};
const deleteCarById=async(id)=>{
    console.log(id);
    return await CarLists.deleteOne({ _id: id })
}
const updateCarById=async(id,data)=>{
   return await CarLists.updateOne({ _id: id }, { $set: data })
}
module.exports={ createCarLists,showCarLists,showCarListsById,showCarsByNameAndAvailability,deleteCarById,updateCarById, checkCarsAvailability}