const controller=require("../controller/carListsController");
const express=require("express");

const  router=express.Router();
router.post("/addcarDetails",controller.createCarLists);
router.get("/showcars",controller.showCarLists);
router.get("/showcars/search",controller.showCarsByNameAndAvailability);
router.get("/showcars/:id",controller.showCarListsById);
router.delete("/delete/:id",controller.deleteCarById);
router.put("/update/:id",controller.updateCarById);
router.post("/checkavailability",controller.checkCarsAvailability);

module.exports=router;