/* Users endpoints in this file */

module.exports = function (app) {
  // Get user information with given id. 200 on Success. 404 if not found.
  app.get("/users/:id", (req, res) => {
    // Get database and connection
    const db = req.app.locals.db;
    const collection = db.collection("users");

    // Get the user info of requested id. Handle error.
    collection
      .find()
      .toArray()
      .then((data) => {
        // Save the id parameter from the GET request
        let id = req.params["id"];

        // Check if GET request is requesting proper id value
        if (id >= 0 && id < data.length) {
          res.status(200).send(data[id]);
        } else {
          res.sendStatus(404);
          return;
        }
      })
      .catch((error) => console.error(error));
  });

  // Create a blank new user. 200 on Success. 400 if error with request.
  app.post("/users", (req, res) => {
    // Check if POST request had data passed
    if (Object.keys(req.body).length > 0) {
      res.sendStatus(400);
      return;
    }

    // Get database and connection
    const db = req.app.locals.db;
    const collection = db.collection("users");

    // Create a new user
    var user = {
      name: "",
      email: "",
      password: "",
      image: "",
      dateJoined: new Date().toISOString().substring(0, 10),
      admin: false,
    };

    // Add new user to collection. Handle error.
    collection
      .save(user)
      .then((data) => {
        res.status(200).send("User added successfully");
      })
      .catch((error) => console.error(error));
  });

  // TODO: Update user with given id. 200 on Success. 404 if not found.
  app.put("/users/:id", function (req, res) {
    res.send("PUT user");
  });

  // Delete user with given id. 200 on Success. 404 if not found.
  app.delete("/users/:id", (req, res) => {
    // Get database and connection
    const db = req.app.locals.db;
    const collection = db.collection("users");

    // Delete the user of requested id. Handle error.
    collection
      .find()
      .toArray()
      .then((data) => {
        // Save the id parameter from the GET request
        let id = req.params["id"];

        // Check if GET request is requesting proper id value
        if (id >= 0 && id < data.length) {
          res.status(200).send("Deleting user");
          collection.deleteOne(data[id]);
        } else {
          res.sendStatus(404);
          return;
        }
      })
      .catch((error) => console.error(error));
  });
};
