const masterdata = require("../data/mockData.json");

// Returns shipment & packages for a supplier buyer pair
// TODO: implement getPackage by props method
function getShipmentsBySupplierBuyer(supplier, buyer) {
  let shipments = [];
  masterdata.forEach((shipment) => {
    shipment.packages.forEach((package) => {
      if (package.supplier === supplier && package.buyer === buyer) {
        shipments.push(shipment);
      }
    });
  });
  if (shipments.length > 0) {
    return shipments;
  } else {
    // TODO: other error scenarios
    throw Error(`No Shipment exists for this Supplier Buyer pair`);
  }
}

module.exports = { getShipmentsBySupplierBuyer };
