const shipment = require("../models/shipment");

const testPackageId = 1011;

try {
  const packageData = shipment.getPackage(testPackageId);
  console.log("Found Package Data:");
  console.log(JSON.stringify(packageData, null, 2));
} catch (error) {
  console.log(error.message);
}
