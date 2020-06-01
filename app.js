/* Main Program: Entry point for the Journal REST API */

// Import express library
const express = require("express");
// Create an instance of an express app
const app = express();
// Run on this port (stay over 1024 to avoid the need for admin privileges)
const port = 8080;
// Import database library
const MongoClient = require("mongodb").MongoClient;

// Enter credentials to connect to mongodb server
const uri =
  "mongodb+srv://{username}:{password}@assignmentcluster-ztd8z.azure.mongodb.net/test?retryWrites=true&w=majority";

// Create a variable to hold our db connection
let connection;

// App will use the public folder to hold the static contents in the static endpoint
app.use("/static", express.static("./public"));

// App will use the builtin JSON parser and decode urls
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import endpoint modules
require("./endpoints/users.js")(app);
require("./endpoints/journals.js")(app);
require("./endpoints/images.js")(app);
require("./endpoints/comments.js")(app);
require("./endpoints/locations.js")(app);
require("./endpoints/static.js")(app);

// Connect to the db; start listening if successful.
MongoClient.connect(uri, { useNewUrlParser: true })
  .then((client) => {
    db = client.db("quarantineJournal");
    connection = client;
    app.locals.connection = connection;
    app.locals.db = db;
    app.listen(port, () => console.log(`Begin: Listening on port ${port}`));
  })
  .catch((error) => console.error(error));

// Catch when a user hits Ctrl-C. Shutdown the database cleanly before exiting.
process.on("SIGINT", () => {
  connection.close();
  process.exit();
});
