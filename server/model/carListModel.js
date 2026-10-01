const mongoose = require("mongoose");

const carListSchema = new mongoose.Schema({
    carNumber: {
        type: String,
        required: true,
        unique: true,
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
    pricePerKm: {
        type: Number,
        min: 0,
        default: 0
    },
    pricePerDay: {
        type: Number,
        min: 0,
        default: 0
    },
    seats: {
        type: Number,
        min: 1,
        default: 4
    },
    fuelType: {
        type: String,
        enum: ["petrol", "diesel", "electric", "hybrid", "other"],
        default: "petrol"
    },
    transmission: {
        type: String,
        enum: ["manual", "automatic"],
        default: "manual"
    },
    availability: {
        type: Boolean,
        default: true
    },
    location: {
        type: String,
        trim: true
    },
    features: {
        type: [String],
        default: []
    },
    imageUrl: {
        type: String
    }
}, {
    timestamps: true
});

const CarListModel = mongoose.model("CarLists", carListSchema);
module.exports = CarListModel;