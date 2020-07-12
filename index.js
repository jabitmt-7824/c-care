const express = require("express");
const port = 8000;
const db = require("./config/mongoose");

const app = express();

app.use(express.urlencoded({extended: true}));

app.use("/", require("./routes/index"));

app.listen(port,function(err){
    if(err)
    {
        console.log(`error: ${err}`);
        return;
    }
    console.log("server is successfully setup and running on the port:", port);
});