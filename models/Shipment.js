const data = require("../data/mockData.json");
const fs = require("fs");
const helper = require("../helpers/helper.js");

/**
 * Gets all shipments from data.
 *
 * @return {Array} of Shipments
 */
function getShipments() {
  return data;
}
/**
 * Gets a specific shipment based on shipmentId.
 *
 * @param {id} shipmentId
 * @return {Shipment} Shipment
 */
// get a single shipment
// TODO: read from test data
function getShipment(id) {
  let shipment = data.find((shipment) => shipment.shipmentId === parseInt(id));
  if (shipment) {
    return shipment;
  } else {
    return `Shipment with id ${id} not found`;
  }
}

// Create Shipment function for creating new shipments & packages via API requests. Accepts shipment and a list of packages
// TODO: Error handling & file append instead of file overwrite
function createShipment(data) {
  const shipmentId = Math.floor(Math.random() * 1000000);
  const newShipment = {
    shipmentId: shipmentId,
    ...data,
  };
  const writeData = JSON.stringify(newShipment);
  fs.writeFileSync("../data/testShipment.json", writeData);
  console.log(`Shipment created with id ${shipmentId}`);
  return newShipment;
}

function updateShipment(id, newShipment, masterData) {
  console.log(masterData);
}

module.exports = { updateShipment };
