const CarBooking = require("../model/carModel");
const CarList = require("../model/carListModel");

const getCarbooking = async (bookingdetails) => {
  const pickupDate = new Date(bookingdetails.pickupDate);
  const returnDate = new Date(bookingdetails.returnDate);

  if (!bookingdetails.pickupDate || !bookingdetails.returnDate || returnDate < pickupDate) {
    throw new Error("Pickup date and return date are invalid.");
  }

  const availableCar = await CarList.findOne({
    carNumber: bookingdetails.carNumber,
    availability: true,
    ...(bookingdetails.location ? { location: bookingdetails.location } : {})
  });

  if (!availableCar) {
    throw new Error("Car is not available for booking at the selected date/location.");
  }

  const overlappingBooking = await CarBooking.findOne({
    carNumber: bookingdetails.carNumber,
    ...(bookingdetails.location ? { location: bookingdetails.location } : {}),
    status: { $in: ["pending", "confirmed"] },
    pickupDate: { $lte: returnDate },
    returnDate: { $gte: pickupDate }
  });

  if (overlappingBooking) {
    throw new Error("Car is already booked for the selected date range.");
  }

  const confirmedBooking = {
    ...bookingdetails,
    pickupDate,
    returnDate,
    status: "confirmed"
  };

  const booking = await CarBooking.create(confirmedBooking);

  await CarList.findByIdAndUpdate(availableCar._id, { availability: false });

  return booking;
};

const viewCarbookings = async () => {
  return await CarBooking.find();
};

const updateBookingStatus = async (id, statusData) => {
  // const booking = await CarList.findById(id);
  // if (!booking) {
  //   throw new Error("Booking not found.");
  // }

  const newStatus = statusData.status;
  const updatedBooking = await CarBooking.findByIdAndUpdate(
    id,
    { $set: { status: newStatus } },
    { returnDocument: "after" }
  );

  // const car = await CarList.findOne({
  //   carNumber: booking.carNumber,
  //   ...(booking.location ? { location: booking.location } : {})
  // });

  // if (car) {
  //   const shouldBeAvailable = ["cancelled", "completed"].includes(newStatus);
  //   await CarList.findByIdAndUpdate(car._id, { availability: shouldBeAvailable });
  // }
  const message="Status Updated Successfully";
  return message;
};

module.exports = { getCarbooking, viewCarbookings, updateBookingStatus };