var express = require("express");
var router = express.Router();
var User = require("../models/user");
var Role = require("../models/role");

router.get("/", async function (req, res) {
  var users = await User.find({});
  var roles = await Role.find({});
  var data = { users: users, roles: roles };
  res.json(data);
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

router.post("/user/update", async function (req, res) {
  var data = req.body;

  var findRole = await Role.findOne({ _id: req.body.originalUserRoleId });
  if (findRole["name"] !== req.body.userRole) {
    findRole["name"] = req.body.userRole;
    var check = await Role.findOneAndUpdate(
      {
        _id: req.body.originalUserRoleId,
      },
      findRole
    );
  }

  data["userRole"] = req.body.originalUserRoleId;
  delete data["originalUserRoleId"];

  await User.findOneAndUpdate({ email: req.body.email }, data);
  res.json("OK");
});

router.get("/user/delete/:email", async function (req, res) {
  var check = await User.findOneAndDelete({ email: req.params.email });
  res.json("OK");
});

// exports
module.exports = router;
