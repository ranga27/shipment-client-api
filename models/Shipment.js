const filename = "../data/testShipment.json";
const helper = require("../helpers/helper.js");
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
  const shipmentId = helper.getNewShipmentId(shipments);
  const date = {
    createdAt: helper.newDate(),
    updatedAt: helper.newDate(),
  };
  const newShipment = {
    shipmentId,
    ...data,
    ...date,
  };
  shipments.push(newShipment);
  helper.writeJSONFile(filename, shipments);
  return newShipment;
}

function updateShipment(shipmentId, newShipment) {
  // Check if shipment exists in data and return its index
  // TODO: Move check shipment function to helper.js
  const index = shipments.findIndex((item) => item.shipmentId == shipmentId);
  if (index >= 0) {
    const date = {
      updatedAt: helper.newDate(),
    };
    shipments[index] = { shipmentId, ...date, ...newShipment };
    helper.writeJSONFile(filename, shipments);
    return shipments[index];
  } else {
    // TODO: other error scenarios
    throw Error(`No Shipment exists for shipment ID ${shipmentId}`);
  }
}

function deleteShipment(shipmentId) {
  // Check if shipment exists in data and return its index
  const index = shipments.findIndex((item) => item.shipmentId == shipmentId);
  if (index >= 0) {
    shipments = shipments.filter((item) => item.shipmentId !== shipmentId);
    helper.writeJSONFile(filename, shipments);
    return true;
  } else {
    // TODO: other error scenarios
    throw Error(`No Shipment exists for shipment ID ${shipmentId}`);
  }
}

function getPackage(packageId) {
  let item = null;
  shipments.forEach((shipment) => {
    shipment.packages.forEach((unit) => {
      if (unit.packageId === packageId) {
        item = unit;
      }
    });
  });
  if (item) {
    return item;
  } else {
    // TODO: other error scenarios
    throw Error(`No Package exists for Package ID ${packageId}`);
  }
}

module.exports = {
  getShipments,
  getShipment,
  createShipment,
  updateShipment,
  deleteShipment,
  getPackage,
};
