//import moment
const moment = require("moment");

//create middleware for a logger function
const logger = (req, res, next) => {
    //note this logs on the server (only in terminal) NOT in the browser
    // console.log("hello");

    //log url that is hit and the date
    console.log(`${req.protocol}://${req.get("host")}${req.originalUrl}: ${moment().format()}`);
    next();
}

module.exports = logger;