const supplierBuyer = require("../reports/supplierBuyer");

// Test function
let supplier = "Plambee";
let buyer = "Quatz";
try {
  const shipments = supplierBuyer.getShipmentsBySupplierBuyer(supplier, buyer);
  console.log("Shipment & packages for,", supplier, "and buyer", buyer, ":");
  console.log(JSON.stringify(shipments, null, 2));
} catch (error) {
  console.log(error.message);
}
