/* Helper functions to complete requests */

const ObjectId = require("mongodb").ObjectId;

module.exports = {
  // Function to find the entity by unique ObjectId. Return data array of entity.
  findEntity: function (collection, query, callback) {
    // Find the entity, convert to array then return the data. Handle error.
    collection.findOne(query, (error, doc) => {
      if (error) {
        callback(error);
      } else {
        if (doc === null) {
          callback(404);
        } else {
          callback(null, doc);
        }
      }
    });
  },

  // Function to find and the get entity information.
  getEntity: function (req, res, endpoint) {
    // Save the search query as an ObjectId retrieved from request
    let query = ObjectId(req.params["id"]);

    // Get database and collection
    const db = req.app.locals.db;
    const collection = db.collection(endpoint);

    // Find and display entity information
    this.findEntity(collection, query, (error, doc) => {
      if (doc) {
        res.status(200).send(doc);
      } else {
        res.sendStatus(error);
      }
    });
  },

  // Function to create new entity.
  createEntity: function (req, res, endpoint, entity) {
    // Check if POST request had any data passed, if data passed then 400
    if (Object.keys(req.body).length > 0) {
      res.sendStatus(400);
      return;
    }

    // Get database and connection
    const db = req.app.locals.db;
    const collection = db.collection(endpoint);

    // Add new entity to collection. Handle error.
    collection
      .insertOne(entity)
      .then((doc) => {
        res
          .status(200)
          .send(`New entity in /${endpoint}: _id = ${doc.insertedId}`);
      })
      .catch((error) => {
        res.sendStatus(error);
      });
  },

  // Function to find and update entity information.
  updateEntity: function (req, res, endpoint, entity) {
    // Save the search query as an ObjectId retrieved from request
    let query = ObjectId(req.params["id"]);

    // Get database and collection
    const db = req.app.locals.db;
    const collection = db.collection(endpoint);

    // Find and update entity information
    this.findEntity(collection, query, (error, doc) => {
      if (doc) {
        res.status(200).send(`Updating entity in /${endpoint}...\n`);
        collection.replaceOne(doc, entity);
      } else {
        res.sendStatus(error);
      }
    });
  },

  // Function to find and delete entity.
  deleteEntity: function (req, res, endpoint) {
    // Save the search query as an ObjectId retrieved from request
    let query = ObjectId(req.params["id"]);

    // Get database and collection
    const db = req.app.locals.db;
    const collection = db.collection(endpoint);

    // Find and delete entity
    this.findEntity(collection, query, (error, doc) => {
      if (doc) {
        res.status(200).send(`Deleting entity in /${endpoint}...`);
        collection.deleteOne(doc);
      } else {
        res.sendStatus(error);
      }
    });
  },
};
