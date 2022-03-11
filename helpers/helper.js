const fs = require("fs");
const shipments = require("../data/testShipment.json");

// function to get new
const getNewShipmentId = (array) => {
  if (array.length > 0) {
    return array[array.length - 1].shipmentId + 1;
  } else {
    return 1;
  }
};

const newDate = () => new Date().toString();

function mustBeInArray(array, id) {
  const row = array.find((r) => r.id == id);
  if (!row) {
    return {
      message: "Couldn't find id",
    };
  }
  return row;
}

function writeJSONFile(filename, content) {
  fs.writeFileSync(filename, JSON.stringify(content), "utf8", (err) => {
    if (err) {
      console.log(err);
    }
  });
}

module.exports = {
  getNewShipmentId,
  newDate,
  mustBeInArray,
  writeJSONFile,
};
