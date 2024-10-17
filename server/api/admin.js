const express = require("express");
const FoodCourt = require("../database/models/food_court.model");
const User = require("../database/models/user.model");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const crypto = require("crypto");
const bcrypt = require("bcrypt");

dotenv.config();
const router = express.Router();


router.route("/addFC").post(async (req, res) => {
  try {
    const token = req.headers.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.usertype !== "admin") {
      return res
        .status(403)
        .send(JSON.stringify({ message: "User not authorized" }));
    }

    const data = req.body;
    const foodCourt = new FoodCourt(data);
    await foodCourt.save();

    const generatedPassword = crypto.randomBytes(8).toString("hex");

    const hashedPassword = await bcrypt.hash(generatedPassword, 10);
    const fc_email = "fc"+data.fc_no+"@kiit.ac.in"
    const newUser = new User({
      email: fc_email,
      name: data.fc_no,
      password: hashedPassword,
      usertype: "foodcourt",
    });

    await newUser.save();

    res.status(200).send(
      JSON.stringify({
        message: "Food Court and User added successfully",
        email: newUser.email,
        password: generatedPassword,
      })
    );
  } catch (error) {
    console.error(error);
    res.status(400).send(JSON.stringify({ message: "400" }));
  }
});


module.exports = router;
