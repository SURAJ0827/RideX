const captainModel = require("../models/captain.model");

module.exports.createCaptain = async ({
  firstname,
  lastname,
  email,
  password,
  color,
  plate,
  capacity,
  vehicleType,
}) => {
  const missingFields = [];
  if (!firstname) missingFields.push("firstname");
  if (!email) missingFields.push("email");
  if (!password) missingFields.push("password");
  if (!color) missingFields.push("color");
  if (!plate) missingFields.push("plate");
  if (!capacity) missingFields.push("capacity");
  if (!vehicleType) missingFields.push("vehicleType");

  if (missingFields.length > 0) {
    console.error(`Missing fields: ${missingFields.join(", ")}`);
    throw new Error("All fields are required");
  }

  const captain = captainModel.create({
    fullname: {
      firstname,
      lastname,
    },
    email,
    password,
    vehicle: {
      color,
      plate,
      capacity,
      vehicleType,
    },
  });

  return captain;
};
