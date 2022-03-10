const reportingMockData = require("../test/reportingMockData.json");

// Returns shipment & packages for a supplier buyer pair
function getShipmentsBySupplierBuyer(supplier, buyer, masterdata) {
  masterdata.forEach((shipment) => {
    shipment.packages.forEach((package) => {
      if (package.supplier === supplier && package.buyer === buyer) {
        console.log(
          "Shipment ID with supplier,",
          supplier,
          "and buyer",
          buyer,
          ":",
          shipment.shipmentId
        );
        console.log("Package in this shipment for this pair: ", package);
      }
    });
  });
}

// Test function
let supplier = "Plambee";
let buyer = "Quatz";
let masterdata = reportingMockData;
getShipmentsBySupplierBuyer(supplier, buyer, masterdata);
