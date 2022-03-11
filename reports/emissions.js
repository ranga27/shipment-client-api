const masterData = require("../data/mockData.json");

// Gets carbon emissions for a supplier passed as an argument from materdata
function getCarbonEmissions(supplier) {
  let emissions = 0;
  masterData.forEach((shipment) => {
    shipment.packages.forEach((package) => {
      if (package.supplier === supplier) {
        if (shipment.vehicle === "truck") {
          emissions = emissions + package.distance;
        }
        if (shipment.vehicle === "rail") {
          emissions = emissions + package.distance * 5;
        }
      }
    });
  });
  return emissions;
}

module.exports = { getCarbonEmissions };
