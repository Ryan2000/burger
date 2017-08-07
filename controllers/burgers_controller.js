/**
 * Created by ryanhoyda on 8/6/17.
 */

var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function(req, res) {
    burger.insertOne([
        "burger_name", "devoured", "date"
    ], [
        req.body.burger_name, false, new Date().toString()
    ], function() {
        res.redirect("/");
    });
});

router.put("/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        devoured: true
    }, condition, function() {
        res.redirect("/");
    });
});

module.exports = router;