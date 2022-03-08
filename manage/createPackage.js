const packageTestData = require("../test/packageTestData.json");

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
