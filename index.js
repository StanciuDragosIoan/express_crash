//BASCI EXPRESS SERVER


//bring in express
const express = require("express");
//import path
const path = require("path");
//import logger
const logger = require("./middleware/logger");
//import members fake data
const members = require("./Members");



//init app
const app = express();

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


//Set a static folder (use() function used to include middleware)
/*
note with a static server we just have to put the files in there and we can serve them
(we don't need to set the content type, loading the html files, css, images, etc.. much more code)
*/
app.use(express.static(path.join(__dirname, "public")));





//initialize middleware
// app.use(logger);


//define get route for a fake api (to get all members)
app.get("/api/members", (req, res) => res.json(members));
//returns data as json (note res.json() serialzies 'stringifies' the data)


//get single member (:id is a url param here!)
app.get("/api/members/:id", (req, res) => {
    //get url param from req obj
    // res.send(req.params.id);


    //some() is a higher order array method that returns false or true
    const found = members.some(member => member.id === parseInt(req.params.id));

    if(found){
        /*
            send the user as JSON obj (note we have to use parseInt() here 
            because of the === which enforces the type, if we use == parseInt() is not required)
        */
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    } else {
        //res.json() sends a 200 status however we send a 400 if no user (bad request)
        res.status(400).json({ msg: `Member with the id ${req.params.id} not found`});
    }

    
});


//define PORT (process.env.PORT from server or default to 5000)
const PORT = process.env.PORT || 5000;


//listen on port to run the server
app.listen(PORT, () => 
    console.log(`Server started on port ${PORT}`));