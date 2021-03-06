const shipment = require("../models/shipment");

// Create New shipment data for updating existing shipment data
const newShipment = {
  vehicle: "rail",
  packages: [
    {
      packageId: 1011,
      supplier: "Yodel",
      buyer: "Weebee",
      contents: { type: "Copper", quantity: 42 },
      origin: "Dongshangguan",
      destination: "Luotang",
      distance: 3742,
    },
  ],
};
try {
  const updatedShipment = shipment.updateShipment(1, newShipment);
  console.log("Updated Shipment Data:", updatedShipment);
} catch (error) {
  console.log(error.message);
}
