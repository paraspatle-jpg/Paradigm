const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports.login = (req, res) => {
  const { email, password } = req.body;
  try{
    const user = User.getCredentials({ email, password });
    const token = user.generateToken();

    res.status(200).send({user,token})
  } catch(err){

  }
};

module.exports.signup = async (req, res) => {
  const { username, email, password } = req.body;
  User.findOne({ email }).then(async (user) => {
    if (user)
      return res
        .status(400)
        .json({ message: "User already exists with this mail" });

    newUser.save().then(async (user) => {
      token = await jwt.sign({ _id: user._id }, "itsasecretbutilovecats");
      console.log(token);
      res.status(200).send({
        userId: user._id,
        username: user.username,
        email: user.email,
      });
    });
  });
};

module.exports.getAllUsers = async (req, res) => {
  User.find({}).then((users) => {
    res.status(200).send(
      users.map((user) => ({
        userId: user._id,
        username: user.username,
        email: user.email,
      }))
    );
  });
};

module.exports.deleteUser = async (req, res) => {
  const userId = req.params.userId;
  User.findOneAndDelete({ _id: userId }).then(() => {
    res.status(200).send({ message: "user deleted successfully" });
  });
};
