// Connection information to connect to mongoDB
const MongoClient = require("mongodb").MongoClient;

// MY URI to authenticate into mongoDB
const uri =
  "mongodb+srv://sunuwara:<password>@assignmentcluster-ztd8z.azure.mongodb.net/test?retryWrites=true&w=majority";

// Given code to setup Journal API Database
MongoClient.connect(uri, function (err, db) {
  if (err) throw err;
  var dbo = db.db("quarantineJournal");
  var collections = ["users", "journals", "images", "comments", "locations"];
  for (collection of collections) {
    dbo.createCollection(collection, function (err, res) {
      if (err) throw err;
      console.log("Collection created!");
      db.close();
    });
  }
});
