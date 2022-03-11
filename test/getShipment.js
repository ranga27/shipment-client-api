const shipment = require("../models/shipment");

const testShipmentId = 3;

try {
  const shipmentData = shipment.getShipment(testShipmentId);
  console.log("Found Shipment Data:");
  console.log(JSON.stringify(shipmentData, null, 2));
} catch (error) {
  console.log(error.message);
}
