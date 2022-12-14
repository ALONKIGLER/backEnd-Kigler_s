const mongoose = require("mongoose");

// C
const addressSchema = new mongoose.Schema({
  name: {
    type: String,

    trim: true,
    min: 3,
    max: 50,
  },
  mobileNumber: {
    type: String,

    trim: true,
  },
  pinCode: {
    type: String,

    trim: true,
  },
  locality: {
    type: String,

    trim: true,
    min: 10,
    max: 100,
  },
  address: {
    type: String,

    trim: true,
    min: 10,
    max: 100,
  },
  cityDistrictTown: {
    type: String,

    trim: true,
  },
  state: {
    type: String,
  },
  landmark: {
    type: String,
    min: 10,
    max: 100,
  },
  alternatePhone: {
    type: String,
  },
  addressType: {
    type: String,

    enum: ["home", "work"],
  },
});

// B
const userAddressSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    address: [addressSchema],
  },
  { timestamps: true }
);

mongoose.model("Address", addressSchema);
module.exports = mongoose.model("UserAddress", userAddressSchema);
