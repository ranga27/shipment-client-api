const shipment = require("../models/shipment");

// Use test ID for deletion
const testShipmentId = 3;
try {
  const deleted = shipment.updateShipment(testShipmentId);
  if (deleted) console.log("Deleted Shipment with ID:", testShipmentId);
  else console.log("Could not delete Shipment with ID:", testShipmentId);
} catch (error) {
  console.log(error.message);
}
