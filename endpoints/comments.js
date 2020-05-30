/* comments endpoints in this file */

module.exports = function (app) {
  var tools = require("../helper/tools.js");

  // Get comment information with given id. 200 on Success. 404 if not found.
  app.get("/comments/:id", (req, res) => {
    tools.getEntity(req, res, "comments");
  });

  // Create a blank new comment. 200 on Success. 400 if error with request.
  app.post("/comments", (req, res) => {
    // Create a new comment
    var comment = {
      commenterId: "",
      journalId: "",
      dateCreated: new Date().toISOString(),
    };

    tools.createEntity(req, res, "comments", comment);
  });

  // Update comment with given id. 200 on Success. 404 if not found.
  app.put("/comments/:id", (req, res) => {
    // Create a new comment
    var comment = {
      commenterId: req.body.commenterId || "",
      journalId: req.body.journalId || "",
      dateCreated: new Date().toISOString(),
    };

    tools.updateEntity(req, res, "comments", comment);
  });

  // Delete comment with given id. 200 on Success. 404 if not found.
  app.delete("/comments/:id", (req, res) => {
    tools.deleteEntity(req, res, "comments");
  });
};
