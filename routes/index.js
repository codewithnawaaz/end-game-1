var express = require("express");
var router = express.Router();
const userModel = require("./users");
/* GET home page. */

/***************** reading

router.get("/create", async function (req, res) {
  const userCreated = await userModel.create({
    username: "adil007",
    name: "adil",
    age: 30,
  });
  res.send(userCreated);
});

***************** reading all ussers
router.get("/allusers", async function (req, res) {
  let allUsers = await userModel.find();
  res.send(allUsers);
});
***************** reading for one users

router.get("/allusers", async function (req, res) {
  let allUsers = await userModel.findOne({ username: "adil007" });
  res.send(allUsers);
});
router.get("/delete", async function (req, res) {
  const deletedUser = await userModel.findOneAndDelete({ username: "adil007" });
  res.send(deletedUser);
});
router.get("/allusers", async function (req, res) {
  let allUsers = await userModel.find();
  res.send(allUsers);
});*/
router.get("/", function (req, res) {
  res.cookie("age", 25);
  res.send("cookie has been served in frontend browser");
});
router.get("/check", function (req, res) {
  console.log(req.cookies.age);
  res.send("check cookies which is saved in browser");
});

router.get("/delete", function (req, res) {
  res.clearCookie("age");
  res.send("clear ho gyi");
});
router.get("/checkdeleted", function (req, res) {
  console.log(req.cookies.age);
  res.send("ho gyi clear");
});
module.exports = router;
