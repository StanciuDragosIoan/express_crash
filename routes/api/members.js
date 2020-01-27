//import members fake data

const express = require("express");
const router = express.Router();
const members = require("../../Members");
//uuid
const uuid = require("uuid");

//define get route for a fake api (to get all members)  *note we have replaced the route with / or /param (left only params)
// router.get("/api/members", (req, res) => res.json(members));
router.get("/", (req, res) => res.json(members));

//returns data as json (note res.json() serialzies 'stringifies' the data)


//get single member (:id is a url param here!) *note we have replaced the route with / or /param (left only params)
// router.get("/api/members/:id", (req, res) => {
router.get("/:id", (req, res) => {
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


//Create member
router.post("/", (req, res) => {
    // res.send(req.body);
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: "active"
    }

    if(!newMember.name || !newMember.email){
    //     res.status(400).json({ msg: "Please include a name and e-mail"});
    // } else {
    //     members.push(newMember);
    // }

        /*
            note we can do it like this (without an else and using the return 
                or with an else without the return, otherwise we get an 
                error of 'headers already sent')
        */
            return res.status(400).json({ msg: "Please include a name and e-mail"});
    } 
    
    //push onto array
    members.push(newMember);
    //send back a response with the entire array of members
    res.json(members);

    //redirect (for template from server otherwise submission will show the members as JSON instead of form table)
    // res.redirect("/");

});




//Update member
router.put("/:id", (req, res) => {
    //get url param from req obj
    // res.send(req.params.id);


    //some() is a higher order array method that returns false or true
    const found = members.some(member => member.id === parseInt(req.params.id));

    if(found){
        const updMember = req.body;
        members.forEach(member => {
            if(member.id === parseInt(req.params.id)) {

                member.name = updMember.name ? updMember.name : member.name;
                member.email = updMember.email ? updMember.email : member.email;

                //send back response
                // res.json({ msg: "Member was updated"}, member);
                res.status(200).json({msg: "Member was updated", member});
            }
        });
    } else {
        //res.json() sends a 200 status however we send a 400 if no user (bad request)
        res.status(400).json({ msg: `Member with the id ${req.params.id} not found`});
    }

    
});




//delete member
router.delete("/:id", (req, res) => {
 

    //some() is a higher order array method that returns false or true
    const found = members.some(member => member.id === parseInt(req.params.id));

    if(found){
        /*
            send the user as JSON obj (note we have to use parseInt() here 
            because of the === which enforces the type, if we use == parseInt() is not required)
        */
        res.json({
            msg: "Member deleted", 
            members: members.filter(member => member.id !== parseInt(req.params.id))
        });
    } else {
        //res.json() sends a 200 status however we send a 400 if no user (bad request)
        res.status(400).json({ msg: `Member with the id ${req.params.id} not found`});
    }

    
});

//export module
module.exports = router;
