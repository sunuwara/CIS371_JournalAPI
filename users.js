/* Users endpoints in this file */

module.exports = function (app) {
  var tools = require("./tools.js");

  // Get user information with given id. 200 on Success. 404 if not found.
  app.get("/users/:id", (req, res) => {
    tools.getEntity(req, res, "users");
  });

  // Create a blank new user. 200 on Success. 400 if error with request.
  app.post("/users", (req, res) => {
    // Create a new user
    var user = {
      name: "",
      email: "",
      password: "",
      image: "",
      dateJoined: new Date().toISOString(),
      admin: false,
    };

    tools.createEntity(req, res, "users", user);
  });

  // Update user with given id. 200 on Success. 404 if not found.
  app.put("/users/:id", (req, res) => {
    // Create a new user
    var user = {
      name: req.body.name || "",
      email: req.body.email || "",
      password: "",
      image: req.body.image || "",
      dateJoined: new Date().toISOString(),
      admin: req.body.admin || false,
    };

    tools.updateEntity(req, res, "users", user);
  });

  // Delete user with given id. 200 on Success. 404 if not found.
  app.delete("/users/:id", (req, res) => {
    tools.deleteEntity(req, res, "users");
  });
};
