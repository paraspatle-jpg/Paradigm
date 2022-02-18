const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();


module.exports.login = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }).then(async (user) => {
    if (!user)
      return res
        .status(404)
        .json({ message: "User not found with these credentials" });
    if (await bcrypt.compare(password, user.password)) {
      const token = await jwt.sign({_id:user._id},"itsasecretbutilovetanmayee")
      console.log(token);
      res.status(200).send({user:{
        userId: user._id,
        username: user.username,
        email: user.email,
      },
      token: token
    });
    }
    else{
        return res
        .status(404)
        .json({ message: "User not found with these credentials" });
    }
  });
};

module.exports.signup = (req, res) => {
  const { username, email, password } = req.body;
  User.findOne({ email }).then((user) => {
    if (user)
      return res
        .status(400)
        .json({ message: "User already exists with this mail" });

    const salt = bcrypt.genSaltSync(8);
    const hashPassword = bcrypt.hashSync(password, salt);

    const newUser = new User({ username, email, password: hashPassword });
    newUser.save().then(async (user) => {
      token = await jwt.sign({_id:user._id},"itsasecretbutilovetanmayee")
      console.log(token);
      res.status(200).send({
        userId: user._id,
        username: user.username,
        email: user.email,
      });
    });
  });
};
