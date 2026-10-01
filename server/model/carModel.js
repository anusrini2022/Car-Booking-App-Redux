const mongoose = require("mongoose");

const carBookingSchema = new mongoose.Schema({
    customerName: {
        type: String,
        required: true,
        trim: true
    },
    carName: {
        type: String,
        required: true,
        trim: true
    },
    carModel: {
        type: String,
        required: true,
        trim: true
    },
    carNumber:{
          type:String,
          required:true,
          unique:true
    },
    contactNumber: {
        type: String,
        required: true,
        trim: true
    },
    pickupDate: {
        type: Date,
        required: true
    },
    returnDate: {
        type: Date,
        required: true
    },
    pricePerDay: {
        type: Number,
        required: true,
        min: 0,
        default:300
    },
    status: {
        type: String,
        enum: ["pending", "confirmed", "cancelled", "completed"],
        default: "pending"
    },
    location: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("CarBooking", carBookingSchema);