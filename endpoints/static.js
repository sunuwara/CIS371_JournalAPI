/* static endpoints in this file */

module.exports = function (app) {
  var tools = require("../helper/tools.js");

  // Get static content information with given the id. 200 on Success. 404 if not found.
  app.get("/static/:id", (req, res) => {
    tools.getEntity(req, res, "static");
  });

  // Create a blank new static content. 200 on Success. 400 if error with request.
  app.post("/static", (req, res) => {
    // Create a new static content
    var staticContent = {
      locationId: "",
      filetype: "",
      length: 0,
      bytes: 0,
    };

    tools.createEntity(req, res, "static", staticContent);
  });

  // Update static content with the given id. 200 on Success. 404 if not found.
  app.put("/static/:id", (req, res) => {
    // Create a new static content
    var staticContent = tools.getEntity(req, res, "images");

    tools.updateEntity(req, res, "static", staticContent);
  });

  // Delete static content with the given id. 200 on Success. 404 if not found.
  app.delete("/static/:id", (req, res) => {
    tools.deleteEntity(req, res, "static");
  });
};
