const data = require("../data/mockData.json");
const fs = require("fs");

class Package {
  constructor(packageId, supplier, buyer, contents, origin, destination) {
    this.packageId = packageId;
    this.supplier = supplier; // who is sending the package
    this.buyer = buyer; // who is receiving the package
    this.contents = contents; // type and quantity (in MT) of metal
    this.origin = origin; // where the package is coming from
    this.destination = destination; // where the package is going to be dropped off
  }

  getPackageByProp(prop, value) {
    if (prop === "packageId") value = parseInt(value);
    let item = null;
    data.forEach((shipment) => {
      shipment.packages.forEach((unit) => {
        if (unit[prop] === value) {
          item = unit;
        }
      });
    });
    if (item) {
      return item;
    } else {
      return `Package with ${prop} ${value} not found`;
    }
  }
  createPackage(data) {
    const packageId = Math.floor(Math.random() * 1000000);
    const newPackage = {
      packageId: packageId,
      ...data,
    };
    const writeData = JSON.stringify(newPackage);
    fs.writeFileSync("../data/testPackage.json", writeData);
    console.log(`Package created with id ${packageId}`);
    return newPackage;
  }
}

module.exports = Package;
const testData = {
  supplier: "Aimbu",
  buyer: "Blogtag",
  contents: { type: "Steel", quantity: 43 },
  origin: "Jinzipai",
  destination: "Pakusari",
};
new Package().createPackage(testData);
