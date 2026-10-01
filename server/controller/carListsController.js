const service = require("../service/carListService");

const createCarLists = async (req, res) => {
    try {
        const cars = req.body;
        const carsDetails = await service.createCarLists(cars);
        res.json(carsDetails)
    } catch (err) {
        console.log(err)
        res.json({ error: err.message })
    }

}
const showCarLists = async (req, res) => {
    try {

        const cars = await service.showCarLists();
        res.json(cars)
    } catch (err) {
        console.log(err)
        res.json({ error: err.message })
    }

}
const showCarListsById = async (req, res) => {
    try {
        let id = req.params.id;
        const cars = await service.showCarListsById(id);
        res.json(cars)
    } catch (err) {
        console.log(err)
        res.json({ error: err.message })
    }

}
const showCarsByNameAndAvailability = async (req, res) => {
    try {
        const { carName, availability, carNumber } = req.query;
        const cars = await service.showCarsByNameAndAvailability(carName, availability, carNumber);
        res.json(cars);
    } catch (err) {
        console.log(err);
        res.json({ error: err.message });
    }
};
const deleteCarById = async (req, res) => {
    try {
        let id = req.params.id;
        const result = await service.deleteCarById(id);
        res.json(result);
    } catch (err) {
        res.json({ msg: err.message })
    }
}
const updateCarById = async (req, res) => {
    try {
        let id = req.params.id;
        const updatedData = req.body;
        let result = await service.updateCarById(id, updatedData);
        console.log(result);
        res.json(result)
    } catch (err) {
        res.json({ msg: err.message })
    }
}
const checkCarsAvailability=async(req,res)=>{
    try{
    let carNo=req.body.carNumber;
    if (!carNo) {
        return res.status(400).json({ msg: "carNumber is required" });
    }
    let result=await service.checkCarsAvailability(carNo);
    res.json(result);
    } catch (err) {
        res.json({ msg: err.message })
    }
}
module.exports = { createCarLists, showCarLists, showCarListsById, showCarsByNameAndAvailability, deleteCarById, updateCarById,checkCarsAvailability }