/*
    Express JS

        is a fast minimalistic back end framework
        it is very basic
        it is used for both server rendered apps as well as API/Microservices

    Basic syntac for a simple server:

        cosnt express = require("express");

        //init express
        const app = express();

        //create endpoint/rote handlers
        app.get("/", function(req, res){
            res.send("Hello server ..");
        });

        //listen on port
        app.listen(5000);



    Basic route handling
        
        handling requests/routes is very simple:

            app.get(), app.post(), app.put(), app.delete(), etc..

        express has a router (so we can store routes in separate files and export them)

        we can parse incoming data with body-parser

            app.get("/", function(){

                //fetch data from DB (mongoDB is used with express)

                //load pages

                //return JSON

                //full access to request and response
            });

        
    Request object:
        
        It is an object with properties of the request (like URL params, query strings, payload, 
        http headers, etc...) + we can create middleware to bodify the request object

    
    Response Object:
    
        http response object (used to send back data, render pages, redirect -> res.redirect())
        we can parse incoming data with middleware such as Body-Parser 


    
    Express Middleware:

            middleware functions have access to the request and response body

            express has built in middleware but middleware also comes from 3rd party packages
            and we can create our custom middleware functions too

            middleware can:
                execute code when a request is made to the server

                make changes to the request and respons objects
                
                end the response cycle

                call next middleware in the stack (after executing middleware we call a next() function)

                    *middleware are functions that execute when a request is made to the 
                    server and we can do anything in these functions (server-side)

    
    Express Router:

        allows us to put routes in separate files and export them

        how to use:

            created a routes/api folder in the root

            inside the 'api' directory, created a members.js file:

            imported express router -> const router = express.Router();

            added members -> const members = require("../../Members");

            (and moved the 2 routes for the fake data in there)
            
            used router.get() instead of app.get();

            removed the api/users bit from the routes URL (in members.js left in the router.use() calls
            of the router.use() either / or /parameters) -> router.get("/:id", (req, res) => {}); *(instead of app.get("api/users"))

            exported route 

            inside index.js used the route:

            app.use("/api/members", require("./routes/api/members"));

    
    Express-handlebars

            installed it (npm i express-handlebras)
            
            how it's used:

                //import handlebars
                const exphbs = require("express-handlebars");

                //handlebars middleware
                app.engine('handlebars', exphbs({   defaultLayout: "main"   })); //defaultLayout will be a file named 'main' so layout will be called main.hb
                app.set('view engine', 'handlebars')

                //route for handle-bars view (homepage route)
                app.get("/", (req, res) => res.render("index", {
                    //pass data into the view
                    title: "Member App",
                    members
                }));

                *created views folder with layouts and 2 templates look syntax there + docs in -> https://github.com/ericf/express-handlebars




        video: https://www.youtube.com/watch?v=L72fhGm1tfE

            left at min 58: (starts using express-handlebars template enigine)
            *look up the sphp module for express (allows PHP interpreting from node server)
            
        

*/
