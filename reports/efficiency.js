const reportingMockData = require("../test/reportingMockData.json");

// Find efficiency for an individual supplier
function getEfficiency(supplier, masterdata) {
  let emissions = 0;
  let packages = 0;
  let efficiency = 0;
  masterdata.forEach((shipment) => {
    shipment.packages.forEach((package) => {
      if (package.supplier === supplier) {
        packages += 1;
        if (shipment.vehicle === "truck") {
          emissions = emissions + package.distance;
        }
        if (shipment.vehicle === "rail") {
          emissions = emissions + package.distance * 5;
        }
      }
    });
  });
  efficiency = Math.floor(emissions / packages);
  console.log("Total Carbon Efficiency for", supplier, ":", efficiency);
  return efficiency;
}

// Get a list of distinct suppliers from the provided dataset
function getDistinctSuppliers(masterdata) {
  let suppliers = [];
  masterdata.forEach((shipment) => {
    shipment.packages.forEach((package) => {
      if (!suppliers.includes(package.supplier))
        suppliers.push(package.supplier);
    });
  });
  return suppliers;
}

// Compare efficiency for each supplier in the dataset
function getEfficiencyStats(masterdata) {
  let efficientSupplier = "";
  let efficiency = 0;
  const suppliers = getDistinctSuppliers(masterdata);
  suppliers.forEach((supplier) => {
    let supplierEfficiency = getEfficiency(supplier, masterdata);
    if (efficiency === 0) {
      efficiency = supplierEfficiency;
      efficientSupplier = supplier;
    } else if (efficiency > supplierEfficiency) {
      efficiency = supplierEfficiency;
      efficientSupplier = supplier;
    }
  });
  return { efficientSupplier, efficiency };
}

// Test function with mock data
let masterdata = reportingMockData;
const { efficientSupplier, efficiency } = getEfficiencyStats(masterdata);
console.log(
  "The most efficient supplier is",
  efficientSupplier,
  "with an efficiency of:",
  efficiency
);
