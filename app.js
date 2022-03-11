const http = require("http");
const Shipment = require("./models/Shipment");
const Package = require("./models/Package");
const { getReqData } = require("./helpers/utils");

const PORT = process.env.PORT || 5000;

const server = http.createServer(async (req, res) => {
  /// api/shipments : GET
  if (req.url === "/api/shipments" && req.method === "GET") {
    // get shipments
    const shipments = new Shipment().getShipments();
    // set the status code, and content-type
    res.writeHead(200, { "Content-Type": "application/json" });
    //send the data
    res.end(JSON.stringify(shipments));
  }
  // /api/shipments/:id : GET
  else if (req.url.match(/\/api\/shipment\/([0-9]+)/) && req.method === "GET") {
    try {
      // get shipemntId from url
      const id = req.url.split("/")[3];
      // get shipment
      const shipment = new Shipment().getShipment(id);
      // set the status code and content-type
      res.writeHead(200, { "Content-Type": "application/json" });
      // send the data
      res.end(JSON.stringify(shipment));
    } catch (error) {
      // set the status code and content-type
      res.writeHead(404, { "Content-Type": "application/json" });
      // send the error
      res.end(JSON.stringify({ message: error }));
    }
  }
  // /api/package/:id : GET
  else if (req.url.match(/\/api\/package\/([0-9]+)/) && req.method === "GET") {
    try {
      // get packageId from url
      const id = req.url.split("/")[3];
      // get package
      const package = new Package().getPackageByProp("packageId", id);
      // set the status code and content-type
      res.writeHead(200, { "Content-Type": "application/json" });
      // send the data
      res.end(JSON.stringify(package));
    } catch (error) {
      // set the status code and content-type
      res.writeHead(404, { "Content-Type": "application/json" });
      // send the error
      res.end(JSON.stringify({ message: error }));
    }
  }
  // /api/package/ : POST
  else if (req.url === "/api/package" && req.method === "POST") {
    // get the data sent along
    let package_data = await getReqData(req);
    // create the new package
    let newPackage = new Package().createPackage(JSON.parse(package_data));
    // set the status code and content-type
    res.writeHead(200, { "Content-Type": "application/json" });
    //send the new package
    res.end(JSON.stringify(newPackage));
  }

  // If no route present
  else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

server.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`);
});
