const express = require("express");
const router = new express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const User = require("../database/models/user.model");
// const Transaction = require("../models/Transaction");
const Order = require("../database/models/order.model");
const EReceipt = require("../database/models/order_details.model");
const FoodCourt = require('../database/models/food_court.model');

// Middleware to verify User token
const verifyUser = (req, res, next) => {
  try {
    const token = req.headers.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.usertype !== "user") {
      return res.status(403).send({ message: "User not authorized" });
    }

    next();
  } catch (error) {
    res.status(401).send({ message: "Invalid token" });
  }
};

// Order placement
router.route("/placeOrder").post(verifyUser, async (req, res) => {
    try {
      const data = req.body;
      const email = jwt.verify(req.headers["token"], process.env.JWT_SECRET).email; // Extract email from the decoded token
      const date = new Date();
      // Add email to the order data
      const orderData = { ...data, email, date };
  
      const order = new Order(orderData);
      await order.save();
  
      res.status(200).send({
        message: "Order placed successfully",
        order,
      });
    } catch (error) {
      console.error("Error placing order:", error); // Log the error details
      res.status(500).send({ message: "Internal server error", error: error.message });
    }
  });

// Getting user profile information
router.route("/profile/:email").get(verifyUser, async (req, res) => {
    try {
      const user = await User.findOne({where: {email: req.params.email}});
      if (!user) {
        return res.status(404).send({ message: "User not found" });
      }
  
      res.status(200).send({
        message: "User profile retrieved successfully",
        user,
      });
    } catch (error) {
      console.error("Error retrieving user profile:", error); // Log the error details
      res.status(500).send({ message: "Internal server error", error: error.message });
    }
  });

// Getting user order history
router.route("/orderHistory/:email").get(verifyUser, async (req, res) => {
  try {
    const orders = await Order.findAll({where: { email: req.params.email}});
    if (!orders || orders.length === 0) {
      return res.status(404).send({ message: "No orders found for this user" });
    }

    res.status(200).send({
      message: "Order history retrieved successfully",
      orders,
    });
  } catch (error) {
    console.error("Error retrieving order history:", error); // Log the error details
    res.status(500).send({ message: "Internal server error", error: error.message });
  }
});

// fetch foodcourts
router.route('/fetchFCs').get(verifyUser, async(req, res) => {
  try {
    const foodCourts = await FoodCourt.findAll();
    res.status(200).send(foodCourts);
  } catch (error) {
    console.error("Error fetching food courts:", error);
    res.status(500).send({ message: "Internal server error" });
  }
});

module.exports = router;