const data = require("../data/mockData.json");
const fs = require("fs");
const helper = require("../helpers/helper.js");
class Shipment {
  /**
   * Create a Shipment.
   *
   * @param {number} shipmentId - Number of people in a party.
   * @param {string} vehicle - Vehicle.
   * @param {array} packages - packages.
   */
  constructor(shipmentId, vehicle) {
    this.shipmentId = shipmentId;
    this.vehicle = vehicle; // vehicle type
    this.packages = new Array();
  }

  /**
   * Gets all shipments from data.
   *
   * @return {Array} of Shipments
   */
  getShipments() {
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
  getShipment(id) {
    let shipment = data.find(
      (shipment) => shipment.shipmentId === parseInt(id)
    );
    if (shipment) {
      return shipment;
    } else {
      return `Shipment with id ${id} not found`;
    }
  }

  addPackage(packages) {}
  // Create Shipment function for creating new shipments & packages via API requests. Accepts shipment and a list of packages
  // TODO: Error handling & file append instead of file overwrite
  createShipment(data) {
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

  updateShipment(id, newShipment) {
    console.log(helper.mustBeInArray(data, id));
  }
}

module.exports = Shipment;
const testData = {
  vehicle: "rail",
  packages: [
    {
      packageId: 101,
      supplier: "Jayo",
      buyer: "Skilith",
      contents: { type: "Rubber", quantity: 42 },
      origin: "Dongshangguan",
      destination: "Luotang",
      distance: 3742,
    },
  ],
};
new Shipment().updateShipment(1);
