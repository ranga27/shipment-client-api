const shipment = require("../models/shipment");

// Create New shipment data
const newShipment = {
  vehicle: "rail",
  packages: [
    {
      packageId: 3,
      supplier: "Meemm",
      buyer: "Yakijo",
      contents: { type: "Brass", quantity: 39 },
      origin: "Tanghua",
      destination: "Komono",
    },
    {
      packageId: 4,
      supplier: "Katz",
      buyer: "Avamm",
      contents: { type: "Aluminum", quantity: 81 },
      origin: "Cergy-Pontoise",
      destination: "Jawl al Majma‘",
    },
  ],
};
try {
  const createdShipment = shipment.createShipment(newShipment);
  console.log("Created Shipment Data:", createdShipment);
} catch (error) {
  console.log(error.message);
}
