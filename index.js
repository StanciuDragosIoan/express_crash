//BASIC EXPRESS SERVER


//bring in express
const express = require("express");
//import path
const path = require("path");
//import logger
const logger = require("./middleware/logger");




//init app
const app = express();



//initialize middleware
// app.use(logger);
//body parser middleware  (if commented the 2 lines below won't allow for the JSON data to be sent as response)
app.use(express.json()); //allow us to use JSON 
app.use(express.urlencoded({extended: false})); //allow us to use forms & url encoded data


//define route (otherwise we'll get the 'Cannot GET' error in the browser)
//to define a route we use app.get(), app.post(), app.put(), etc..

//get route
// app.get('/', (req, res) => {
//     //sent response to browser
//     // res.send("<h1>GET request successful</h1>");

//     //send file to browser (load from the current directory, from 'public' directory a file called index.html)
//     //this is not recommended (as we need a separate route, manually set for each file we want to serve) 
//     //instead we need to set a static folder from which to serve pages
//     res.sendFile(path.join(__dirname, "public", "index.html"));
// });


// ### Set a static folder (use() function used to include middleware)
/*
note with a static server we just have to put the files in there and we can serve them
(we don't need to set the content type, loading the html files, css, images, etc.. much more code)
*/
app.use(express.static(path.join(__dirname, "public")));



//bring in users.js from api/routes (2nd param is the actual file imported)

//Members API routes
app.use("/api/members", require("./routes/api/members"));






//define PORT (process.env.PORT from server or default to 5000)
const PORT = process.env.PORT || 5000;


//listen on port to run the server
app.listen(PORT, () => 
    console.log(`Server started on port ${PORT}`));