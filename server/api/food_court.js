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
const ItemAvailability = require("../database/nosqlModels/itemAvailability.model");

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
    const order = await Order.findOne({
      where: { order_no: req.params.order_id },
    });
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
    res
      .status(500)
      .send({ message: "Internal server error", error: error.message });
  }
});

// Mark item availability
router.route("/markAvailable").post(verifyFC, async (req, res) => {
  try {
    const body = req.body;

    if (!body.fc_no || !body.item_id) {
      return res
        .status(400)
        .send({ message: "fc_no and item_id are required." });
    }

    let itemList = await ItemAvailability.findOne({ fc_no: body.fc_no });

    if (!itemList) {
      itemList = new ItemAvailability({
        fc_no: body.fc_no,
        item_list: [body.item_id],
      });

      await itemList.save();
      return res
        .status(201)
        .send({ message: "New record created and item added.", itemList });
    } else {
      if (!itemList.item_list.includes(body.item_id)) {
        itemList.item_list.push(body.item_id);
        await itemList.save();
        return res
          .status(200)
          .send({ message: "Item added to existing record.", itemList });
      } else {
        return res
          .status(200)
          .send({ message: "Item already exists in the list.", itemList });
      }
    }
  } catch (error) {
    console.error("Error in markAvailable API:", error);
    res
      .status(500)
      .send({ message: "Internal server error", error: error.message });
  }
});

// Mark item unavailability
router.route('/markItemUnavailable').post(verifyFC, async (req, res) => {
  try {
    const body = req.body;

    if (!body.fc_no || !body.item_id) {
      return res.status(400).send({ message: "fc_no and item_id are required." });
    }

    // Find the record with the given fc_no
    let itemList = await ItemAvailability.findOne({ fc_no: body.fc_no });

    if (!itemList) {
      // If no record exists, respond with a 404
      return res.status(404).send({ message: "Record not found for the given fc_no." });
    }

    // Check if the item_id exists in the item_list
    if (!itemList.item_list.includes(body.item_id)) {
      return res.status(404).send({ message: "Item not found in the list." });
    }

    // Remove the item_id from the list
    itemList.item_list = itemList.item_list.filter(item => item !== body.item_id);

    // Save the updated document
    await itemList.save();

    return res.status(200).send({ message: "Item removed successfully.", itemList });
  } catch (error) {
    console.error("Error in markItemUnavailable API:", error);
    res.status(500).send({ message: "Internal server error", error: error.message });
  }
});

module.exports = router;
