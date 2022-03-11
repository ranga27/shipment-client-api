const shipment = require("../models/shipment");

try {
  const shipments = shipment.getShipments();
  console.log("Found Shipment Data:");
  console.log(JSON.stringify(shipments, null, 2));
} catch (error) {
  console.log(error.message);
}
