const data = require("../data/mockData.json");
const fs = require("fs");
const helper = require("../helpers/helper.js");
const filename = "../data/testShipment.json";
const shipments = require("../data/testShipment.json");
/**
 * Gets all shipments from data.
 *
 * @return {Array} of Shipments
 */
function getShipments() {
  if (shipments.length > 0) {
    return shipments;
  } else {
    // TODO: other error scenarios
    throw Error(`No Shipment available`);
  }
}
/**
 * Gets a specific shipment based on shipmentId.
 *
 * @param {shipmentId} ShipmentID
 * @return {Shipment} Shipment
 */
// get a single shipment
function getShipment(shipmentId) {
  const index = shipments.findIndex((item) => item.shipmentId == shipmentId);
  if (index >= 0) {
    return shipments[index];
  } else {
    // TODO: other error scenarios
    throw Error(`No Shipment exists for shipment ID ${shipmentId}`);
  }
}

// Create Shipment function for creating new shipments & packages via API requests. Accepts shipment and a list of packages
// TODO: Error handling & file append instead of file overwrite
function createShipment(data) {
  const shipmentId = helper.getNewId(shipments);
  const newShipment = {
    shipmentId: shipmentId,
    ...data,
  };
  const writeData = JSON.stringify(newShipment);
  fs.writeFileSync("../data/testShipment.json", writeData);
  console.log(`Shipment created with id ${shipmentId}`);
  return newShipment;
}

function updateShipment(shipmentId, newShipment, masterData) {
  // Check if shipment exists in masterData and return its index
  const index = masterData.findIndex((item) => item.shipmentId == shipmentId);
  if (index >= 0) {
    const date = {
      updatedAt: helper.newDate(),
    };
    masterData[index] = { shipmentId, ...date, ...newShipment };
    helper.writeJSONFile(filename, masterData);
    return masterData[index];
  } else {
    // TODO: other error scenarios
    throw Error(`No Shipment exists for shipment ID ${shipmentId}`);
  }
}

module.exports = { getShipments, getShipment, createShipment, updateShipment };
