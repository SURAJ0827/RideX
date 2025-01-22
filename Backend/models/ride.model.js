const mongoose = require("mongoose");

const rideSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  captain: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "captain",
  }, // captain is only a accepted
  pickup: {
    type: String,
    required: true,
  }, // starting
  destination: {
    type: String,
    required: true,
  }, // ending
  fare: {
    type: Number,
    required: true,
  }, // money

  status: {
    type: String,
    enum: ["pending", "accepted", "ongoing", "completed", "cancelled"],
    default: "pending",
  },

  duration: {
    type: Number,
  }, // seconds

  distance: {
    type: Number,
  }, // meters

  paymentID: {
    type: String,
  },

  orderId: {
    type: String,
  },
  signature: {
    type: String,
  },

  otp: {
    type: String,
    select: false,
    required: true,
  },
});

module.exports = mongoose.model("ride", rideSchema);
