/* Users endpoints in this file */

module.exports = function (app) {
  // TODO: Get user with given id. 200 on Success. 404 if not found.
  app.get("/users/:id", function (req, res) {
    const db = req.app.locals.db;
    const collection = db.collection("users");

    collection.find().toArray(function (err, data) {
      console.log(data);
      if (err) {
        return res.status(404).send("Not Found!");
      }
      res.send(data);
    });
  });

  // Create a blank new user. 200 on Success. 400 if error with request.
  app.post("/users", (req, res) => {
    // Check if POST request had data passed
    if (Object.keys(req.body).length > 0) {
      res
        .status(400)
        .send({ message: "Cannot send in data to create new user!" });
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
        res.send({ message: "User added successfully" });
      })
      .catch((err) => {
        res.status(400).send({ message: err.message });
      });
  });

  // TODO: Update user with given id. 200 on Success. 404 if not found.
  app.put("/users/:id", function (req, res) {
    res.send("PUT user");
  });

  // TODO: Delete user with given id. 200 on Success. 404 if not found.
  app.delete("/users", function (req, res) {
    res.send("DELETE user");

    // Get database and connection
    const db = req.app.locals.db;
    const collection = db.collection("users");

    collection.remove({});
  });
};
