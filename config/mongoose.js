const mongoose = require("mongoose");
const env = require("./environment")
// connect to database
mongoose.connect('mongodb://localhost:27017/'+ env.db, {useNewUrlParser: true, useUnifiedTopology: true});
console.log(env.db)
// get connection
const db = mongoose.connection;

db.on("error", console.error.bind("error in connecting to db"));

db.once("open", function(){
    console.log(`successfully connected to database ${env.db}`);
});

module.exports = db;