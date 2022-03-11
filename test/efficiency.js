const efficiency = require("../reports/efficiency");

// Test function with mock data
const { efficientSupplier, emissionEfficiency } =
  efficiency.getEfficiencyStats();
console.log(
  "The most efficient supplier is",
  efficientSupplier,
  "with an efficiency of:",
  emissionEfficiency
);
