const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const FoodCourt = require("../database/models/food_court.model");
const User = require("../database/models/user.model");
// const Transaction = require("../database/models/Transaction");
const Order = require("../database/models/order.model");
const EReceipt = require("../database/models/order_details.model");

// Middleware to verify admin token
const verifyAdmin = (req, res, next) => {
  try {
    const token = req.headers.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.usertype !== "admin") {
      return res.status(403).send({ message: "User not authorized" });
    }

    next();
  } catch (error) {
    res.status(401).send({ message: "Invalid token" });
  }
};

// Add a new food court
router.route("/addFC").post(verifyAdmin, async (req, res) => {
  try {
    const data = req.body;
    const foodCourt = new FoodCourt(data);
    await foodCourt.save();

    const generatedPassword = crypto.randomBytes(8).toString("hex");
    const hashedPassword = await bcrypt.hash(generatedPassword, 10);
    const fc_email = "fc" + data.fc_no + "@kiit.ac.in";

    const newUser = new User({
      email: fc_email,
      name: data.fc_no,
      password: hashedPassword,
      usertype: "foodcourt",
    });

    await newUser.save();

    res.status(200).send({
      message: "Food Court and User added successfully",
      email: newUser.email,
      password: generatedPassword,
    });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
});

// Edit details of an existing food court
router.route("/editFC/:id").put(verifyAdmin, async (req, res) => {
  try {
    const data = req.body;
    const foodCourt = await FoodCourt.findOne({where: {fc_no: req.params.id}});
    if (!foodCourt) {
      return res.status(404).send({ message: "Food Court not found" });
    }

    // Update food court details
    Object.assign(foodCourt, data);
    await foodCourt.save();

    res.status(200).send({
      message: "Food Court updated successfully",
      foodCourt,
    });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
});

// Delete a food court
router.route("/deleteFC/:id").put(verifyAdmin, async (req, res) => {
  try {
    const foodCourt = await FoodCourt.findOne({where: {fc_no: req.params.id}});
    if (!foodCourt) {
      return res.status(404).send({ message: "Food Court not found" });
    }

    await foodCourt.destroy();

    res.status(200).send({
      message: "Food Court deleted successfully",
      foodCourt,
    });
  } catch (error) {
    console.error("Error deleting food court:", error); // Log the error details
    res.status(500).send({ message: "Internal server error", error: error.message });
  }
});

// Get transactions made by fc_id
router.route("/transactions/:fc_id").get(verifyAdmin, async (req, res) => {
  try {
    const transactions = await Transaction.find({ fc_id: req.params.fc_id });
    res.status(200).send(transactions);
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
});

router.route("/orders/:id").get(verifyAdmin, async (req, res) => {
  try {
    const orders = await Order.findAll({where: {fc_no: req.params.id}});
    res.status(200).send(orders);
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
});

// Get order details by order_id
router.route("/order/:order_id").get(verifyAdmin, async (req, res) => {
  try {
    const order = await Order.findOne({where: {order_no: req.params.order_id}});
    if (!order) {
      return res.status(404).send({ message: "Order not found" });
    }
    res.status(200).send(order);
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
});

// Get list of all food courts
router.route("/foodcourts").get(verifyAdmin, async (req, res) => {
  try {
    const foodCourts = await FoodCourt.findAll();
    res.status(200).send(foodCourts);
  } catch (error) {
    console.error("Error fetching food courts:", error);
    res.status(500).send({ message: "Internal server error" });
  }
});

module.exports = router;