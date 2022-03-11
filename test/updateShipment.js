const shipment = require("../models/shipment");
const masterData = require("../data/testShipment.json");

const shipment = shipment().updateShipment(1, masterData);

