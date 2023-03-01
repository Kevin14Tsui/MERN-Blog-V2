const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const User = require("./models/User");
const bcrypt = require("bcryptjs"); //enctype
const app = express();
const jwt = require("jsonwebtoken");

const salt = bcrypt.genSaltSync(10);
const secret = "67tg8ffs8gg9";

app.use(cors());
app.use(express.json());

// connect mongodb
mongoose.connect(
  "mongodb+srv://Kevin:d5aVvG!G.9czV3D@cluster0.noe9wvf.mongodb.net/?retryWrites=true&w=majority"
);

app.post("/register", async (req, res) => {
  const { username, password } = req.body; // from register body
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (e) {
    res.status(400).json("wrong credentials");
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.findOne({ username });
  const passOk = bcrypt.compareSync(password, userDoc.password);
  res.json(passOk);
  // if (passOk) {
  //   // logged
  //   jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {});
  //   if (err) throw err;
  //   res.json(token);
  // } else {
  //   res.status(400).json("Wrong credntials");
  // }
});

app.listen(4000);
