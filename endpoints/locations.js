/* locations endpoints in this file */

module.exports = function (app) {
  var tools = require("../helper/tools.js");

  // Get location information with given id. 200 on Success. 404 if not found.
  app.get("/locations/:id", (req, res) => {
    tools.getEntity(req, res, "locations");
  });

  // Create a blank new location. 200 on Success. 400 if error with request.
  app.post("/locations", (req, res) => {
    // Create a new location
    var location = {
      name: "",
      coordinates: "",
    };

    tools.createEntity(req, res, "locations", location);
  });

  // Update location with given id. 200 on Success. 404 if not found.
  app.put("/locations/:id", (req, res) => {
    // Create a new location
    var location = {
      name: req.body.name || "",
      coordinates: req.body.coordinates || "",
    };

    tools.updateEntity(req, res, "locations", location);
  });

  // Delete location with given id. 200 on Success. 404 if not found.
  app.delete("/locations/:id", (req, res) => {
    tools.deleteEntity(req, res, "locations");
  });
};
