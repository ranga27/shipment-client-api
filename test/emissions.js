const emissions = require("../reports/emissions");

// Test function with mock data
let supplier = "Yodel";
const carbonEmissions = emissions.getCarbonEmissions(supplier);
console.log("Total Carbon Emissions for", supplier, ":", carbonEmissions);
