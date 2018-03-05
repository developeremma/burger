// Inside the burgers_controller.js file, import the following:
// Express
// burger.js
// Create the router for the app, and export the router at the end of your file.
var express = require('express');
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require('../models/burger.js');
// Create all our routes and set up logic within those routes where required.
router.get("/", function(req,res){
    //pull add the burger data
    burger.selectAll(function(data){
        var theBurger = {burger: data};
        console.log(theBurger);
        //render data for use in index.handlebars
        res.render("index", theBurger);
    });
});
router.post("/", function(req, res){
    //add burger inputed by user to db
    burger.insertOne(
        ["burger_name"],[req.body.burger_name], function(){
            //send back to homepage to refresh list
            res.redirect("/");
        });
});

router.put("/:id", function(req,res){
    //update the burgers after devours button is hit
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function(){
        res.redirect("/");
    });
});

//export the router
module.exports = router;