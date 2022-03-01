const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  username: {
    type: "string",
    required: [true, "Please enter all required fields"],
  },
  email: {
    type: "string",
    required: [true, "Please enter all required fields"],
    unique: [true, "Email already in use"],
  },
  password: {
    type: "string",
    required: [true, "Please enter all required fields"],
    minLength: [6, "Password too short"],
  },
  tokens: [
    {
      token: {
        type: "string",
      },
    },
  ],
});

UserSchema.static.getCredentials = async function (email, password) {
  const user = await User.findOne({ email });
  if (!user) {
    res.status(404).send({ msg: "Login Failed" });
  }
  const isValid = await bcrypt.verify(password, user.password);
  if (!isValid) {
    res.status(400).send({ msg: "Login Failed" });
  }

  return user;
};

UserSchema.methods.generateToken = async function () {
  const user = this;

  token = await jwt.sign({ id: user._id }, "itsasecretbutilovecats");
  user.tokens = user.tokens.concat({ token });
  await user.save();

  return token;
};

UserSchema.pre("save", async function (next) {
  const rounds = 8;
  if (this.isModified("password")) {
    const hash = await bcrypt.hash(this.password, rounds);
    this.password = hash;
  }

  next();
});

UserSchema.methods.toJSON = function () {
  const user = this;
  const UserOBJ = user.toObject();

  delete UserOBJ.password;
  delete UserOBJ.tokens;

  return UserOBJ;
};

module.exports = User = mongoose.model("user", UserSchema);
