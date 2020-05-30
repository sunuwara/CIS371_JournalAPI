/* Journals endpoints in this file */

module.exports = function (app) {
  var tools = require("./tools.js");

  // Get journal information with given id. 200 on Success. 404 if not found.
  app.get("/journals/:id", (req, res) => {
    tools.getEntity(req, res, "journals");
  });

  // Create a blank new journal. 200 on Success. 400 if error with request.
  app.post("/journals", (req, res) => {
    // Create a new journal
    var journal = {
      authorId: "",
      locationId: "",
      content: "",
      dateCreated: new Date().toISOString(),
    };

    tools.createEntity(req, res, "journals", journal);
  });

  // Update journal with given id. 200 on Success. 404 if not found.
  app.put("/journals/:id", (req, res) => {
    // Create a new journal
    var journal = {
      authorId: req.body.authorId || "",
      locationId: req.body.locationId || "",
      content: req.body.content || "",
      dateCreated: new Date().toISOString(),
    };

    tools.updateEntity(req, res, "journals", journal);
  });

  // Delete journal with given id. 200 on Success. 404 if not found.
  app.delete("/journals/:id", (req, res) => {
    tools.deleteEntity(req, res, "journals");
  });
};
