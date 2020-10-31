const fs = require("fs");
const rfs = require("rotating-file-stream");
const path = require("path");

const logDirectory = path.join(__dirname, "../production_logs");
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

const accesLogStream = rfs.createStream("access.log",{
    interval: "1d",
    path: logDirectory
});

const development = {
    name: "development",
    db: "c_care_db",
    jwt_secret: "ccare"

}
const production = {
    name: "production",
    db: process.env.db,
    jwt_secret:process.env.jwt_secret
}
module.exports = eval(process.env.NODE_ENV) === undefined ? development : eval(process.env.NODE_ENV)
