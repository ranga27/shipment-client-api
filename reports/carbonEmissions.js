const reportingMockData = require("../test/reportingMockData.json");

// Gets carbon emissions for a supplier passed as an argument from materdata
function getCarbonEmissions(supplier, masterdata) {
  let emissions = 0;
  masterdata.forEach((shipment) => {
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

// Test function with mock data
let supplier = "Yodel";
let masterdata = reportingMockData;
const carbonEmissions = getCarbonEmissions(supplier, masterdata);
console.log("Total Carbon Emissions for", supplier, ":", carbonEmissions);
