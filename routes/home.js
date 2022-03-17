var express = require("express");
var router = express.Router();
var User = require("../models/user");
var Role = require("../models/role");

router.get("/", async function (req, res) {
  var users = await User.find({});
  res.json(users);
});

router.post("/user/create", async function (req, res) {
  var roleData = new Role({ name: req.body.userRole });

  var userData = req.body;
  delete userData["userRole"];

  userData["userRole"] = roleData["_id"];

  userData = new User(userData);

  roleData.save();
  userData.save();

  res.json("OK");
});

router.post("/user/update/:id", async function (req, res) {
  var a = "";
});

router.get("/user/delete/:id", async function (req, res) {
  var a = "";
});

// exports
module.exports = router;
