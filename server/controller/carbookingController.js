const service = require("../service/caeBookingService");

const getCarbooking = async (req, res) => {
    try {
    
        const bookingDetails = req.body;
        const bookingData = await service.getCarbooking(bookingDetails);
        res.json(bookingData);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });
    }
};

const viewCarbookings = async (req, res) => {
    try {

        const bookingData = await service.viewCarbookings();
        res.json(bookingData);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });
    }
};

const updateBookingStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const statusData = req.body;
        const bookingData = await service.updateBookingStatus(id, statusData);
        res.json(bookingData);
          } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getCarbooking, viewCarbookings, updateBookingStatus };