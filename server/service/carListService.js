const repository=require("../repository/carListRepository");

const createCarLists=async(car)=>{
    return await repository.createCarLists(car)
};
const showCarLists=async()=>{
    return await repository.showCarLists()
};
const showCarListsById=async(id)=>{
    return await repository.showCarListsById(id);
};
const showCarsByNameAndAvailability = async (carName, availability, carNumber) => {
    return await repository.showCarsByNameAndAvailability(carName, availability, carNumber);
};
const  checkCarsAvailability=async(carNo)=>{
    return await repository.checkCarsAvailability(carNo);
    
}
const deleteCarById=async(id)=>{
    return await repository.deleteCarById(id);
}
const updateCarById=async(id,data)=>{
    return await repository.updateCarById(id,data);
}
module.exports={createCarLists,showCarLists,showCarListsById,showCarsByNameAndAvailability,deleteCarById,updateCarById,checkCarsAvailability};