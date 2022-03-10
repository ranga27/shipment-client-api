const shipmentTestData = require("../test/shipmentTestData.json");
const packageTestData = require("../test/packageTestData.json");

// Module to create a shipment, create package and add package to shipment

// TODO: separate package creation and addition method

// Package constructor
function Package(packageId, supplier, buyer, contents, origin, destination) {
  this.packageId = packageId;
  this.supplier = supplier; // who is sending the package
  this.buyer = buyer; // who is receiving the package
  this.contents = contents; // type and quantity (in MT) of metal
  this.origin = origin; // where the package is coming from
  this.destination = destination; // where the package is going to be dropped off
  this.logItem = function () {
    for (let prop in this) {
      console.log(" ", prop, ": ", this[prop]);
    }
  };
}

// Shipment constructor
function Shipment(shipmentId, vehicle) {
  this.shipmentId = shipmentId;
  this.vehicle = vehicle;
  this.packages = new Array();
  this.logItem = function () {
    for (let prop in this) {
      console.log(" ", prop, ": ", this[prop]);
    }
  };
}

// Prototype function to add packages to shipment.
Shipment.prototype.AddPackage = function (package) {
  // TODO: see if we can use a pure function
  this.packages.push(package);
};

// Create Shipment function for creating new shipments & packages via API requests. Accepts shipment and a list of packages
function createShipment(shipmentData, packageList) {
  // new object instance
  const newShipment = new Shipment(
    shipmentData.shipmentId,
    shipmentData.vehicle
  );
  // TODO: limit packages to 1 when vehicle == truck
  packageList.forEach((item) => {
    const newPackage = new Package(
      item.packageId,
      item.supplier,
      item.buyer,
      item.contents,
      item.origin,
      item.destination
    );
    newShipment.AddPackage(newPackage);
  });
  newShipment.logItem();
}

// Test Functions
generateTestData(shipmentTestData, packageTestData);

// Create Shipments with Packages from mock data
function generateTestData(shipmentTestData, packageTestData) {
  shipmentTestData.forEach((shipment) => {
    // console.log(element);
    const packageList = getRandomPackages(packageTestData);
    createShipment(shipment, packageList);
  });
}

// returns random number of packages from test data, from 0 to 10
function getRandomPackages(array) {
  // Number of random packages
  const limit = Math.floor(Math.random() * 10);
  let randomPackages = [];
  for (let index = 0; index < limit; index++) {
    // Choose a random index within the test data array of packages
    const randomIndex = Math.floor(Math.random() * array.length);
    randomPackages[index] = array[randomIndex];
  }
  return randomPackages;
}
