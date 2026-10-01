const repository = require("../repository/carbookingrepository");

const getCarbooking = async (bookingdetails) => {
    return await repository.getCarbooking(bookingdetails);
};

const viewCarbookings = async () => {
    return await repository.viewCarbookings();
};

const updateBookingStatus = async (id, statusData) => {
    return await repository.updateBookingStatus(id, statusData);
};

module.exports = { getCarbooking, viewCarbookings, updateBookingStatus };