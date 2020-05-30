/* images endpoints in this file */

module.exports = function (app) {
  var tools = require("../helper/tools.js");

  // Get image information with given id. 200 on Success. 404 if not found.
  app.get("/images/:id", (req, res) => {
    tools.getEntity(req, res, "images");
  });

  // Create a blank new image. 200 on Success. 400 if error with request.
  app.post("/images", (req, res) => {
    // Create a new image
    var image = {
      locationId: "",
      filetype: "",
      length: 0,
      bytes: 0,
    };

    tools.createEntity(req, res, "images", image);
  });

  // Update image with given id. 200 on Success. 404 if not found.
  app.put("/images/:id", (req, res) => {
    // Create a new image
    var image = {
      locationId: req.body.locationId || "",
      filetype: req.body.filetype || "",
      length: req.body.length || 0,
      bytes: req.body.bytes || 0,
    };

    tools.updateEntity(req, res, "images", image);
  });

  // Delete image with given id. 200 on Success. 404 if not found.
  app.delete("/images/:id", (req, res) => {
    tools.deleteEntity(req, res, "images");
  });
};
