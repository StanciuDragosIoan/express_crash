/*
    Express JS

        is a fast minimalistic back end framework
        it is very basic
        it is used for both server rendered apps as well as API/Microservices

    Basic syntac for a simpel server:

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



        video: https://www.youtube.com/watch?v=L72fhGm1tfE

            left at min 37: (starts moving routes to files and use express router)
            *look up the sphp module for express (allows PHP interpreting from node server)
            
        

*/
