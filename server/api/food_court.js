const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const FoodCourt = require("../database/models/food_court.model");
const User = require("../database/models/user.model");
// const Transaction = require("../database/models/Transaction");
const Order = require("../database/models/order.model");
const EReceipt = require("../database/models/order_details.model");
const router = new express.Router();

// Middleware to verify FC token
const verifyFC = (req, res, next) => {
  try {
    const token = req.headers.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.usertype !== "foodcourt") {
      return res.status(403).send({ message: "User not authorized" });
    }

    next();
  } catch (error) {
    res.status(401).send({ message: "Invalid token" });
  }
};


// Mark order as delivered
router.route("/order/delivered/:order_id").put(verifyFC, async (req, res) => {
    try {
      const { otp } = req.body;
  
      // Find the order by order_id
      const order = await Order.findOne({where: {order_no: req.params.order_id}});
      if (!order) {
        return res.status(404).send({ message: "Order not found" });
      }
  
      // Check if the OTP in the request body matches the OTP in the order
      if (order.otp !== otp) {
        return res.status(400).send({ message: "Invalid OTP" });
      }
  
      // Mark the order as delivered
      order.delivered = true;
      await order.save();
  
      res.status(200).send({ message: "Order marked as delivered", order });
    } catch (error) {
      console.error("Error marking order as delivered:", error); // Log the error details
      res.status(500).send({ message: "Internal server error", error: error.message });
    }
  });
  
  module.exports = router;
