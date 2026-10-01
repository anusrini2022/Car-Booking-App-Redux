const express = require("express");
const router = express.Router();
const controller = require("../controller/carbookingController");

// middleWare
router.post("/booking", controller.getCarbooking);
router.get("/showBookings", controller.viewCarbookings);
router.put("/updateStatus/:id", controller.updateBookingStatus);
module.exports = router;

