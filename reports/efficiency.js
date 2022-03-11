const masterData = require("../data/mockData.json");

// Find efficiency for an individual supplier
function getEfficiency(supplier) {
  let emissions = 0;
  let packages = 0;
  let efficiency = 0;
  masterData.forEach((shipment) => {
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
function getDistinctSuppliers() {
  let suppliers = [];
  masterData.forEach((shipment) => {
    shipment.packages.forEach((package) => {
      if (!suppliers.includes(package.supplier))
        suppliers.push(package.supplier);
    });
  });
  return suppliers;
}

// Compare efficiency for each supplier in the dataset
function getEfficiencyStats() {
  let efficientSupplier = "";
  let emissionEfficiency = 0;
  const suppliers = getDistinctSuppliers();
  suppliers.forEach((supplier) => {
    let supplierEfficiency = getEfficiency(supplier);
    if (emissionEfficiency === 0) {
      emissionEfficiency = supplierEfficiency;
      efficientSupplier = supplier;
    } else if (emissionEfficiency > supplierEfficiency) {
      emissionEfficiency = supplierEfficiency;
      efficientSupplier = supplier;
    }
  });
  return { efficientSupplier, emissionEfficiency };
}

module.exports = { getEfficiencyStats };
