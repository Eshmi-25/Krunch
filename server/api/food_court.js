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
const Item = require("../database/models/item.model");
const Orders = require("../database/models/order.model");
const OrderDetails = require('../database/models/order_details.model');

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

router.route('/getOrders/:fc_no').get(verifyFC, async (req, res) => {
  try {
    const fc_no = req.params.fc_no;

    if (!fc_no) {
      return res.status(404).send({ message: "Food court ID not valid" });
    }

    // Fetch all orders for the given food court
    const orders = await Orders.findAll({ where: { fc_no: fc_no } });

    if (!orders || orders.length === 0) {
      return res.status(200).send([]); // No orders found
    }

    // Prepare an array to hold orders with details
    const ordersWithDetails = [];

    for (const order of orders) {
      // Fetch order details for each order
      const orderDetails = await OrderDetails.findAll({
        where: { order_no: order.order_no },
      });

      // Enhance each order detail with the item name
      const enhancedOrderDetails = [];
      for (const detail of orderDetails) {
        const item = await Item.findOne({ where: { item_id: detail.item_id } });
        const detailWithItemName = {
          ...detail.dataValues, // Spread the order detail
          item_name: item ? item.item_name : "Unknown", // Add item name or default to "Unknown"
        };
        enhancedOrderDetails.push(detailWithItemName);
      }

      // Append the enhanced order details to the order object
      const orderWithDetails = {
        ...order.dataValues, // Spread the order object
        order_details: enhancedOrderDetails, // Add the enhanced order details
      };

      // Add to the result array
      ordersWithDetails.push(orderWithDetails);
    }

    // Return the orders with details
    res.status(200).send(ordersWithDetails);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).send({ message: "Internal server error", error: error.message });
  }
});

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

// Get item availability for a specific food court
router.get("/getItemAvailability/:fc_no", verifyFC, async (req, res) => {
  try {
    const fc_no = req.params.fc_no;

    if (!fc_no) {
      return res.status(400).send({ message: "fc_no is required." });
    }

    // Find the list of available items for the food court
    const itemAvailability = await ItemAvailability.findOne({ fc_no });
    console.log(itemAvailability);
    var availableItemIds = [];
    if(itemAvailability) {
      availableItemIds = itemAvailability.item_list;
    }
    // Fetch all items (assuming a central item database)
    console.log(availableItemIds);
    const allItems = await Item.findAll();
    // Map all items to include availability status
    const itemsWithAvailability = allItems.map((item) => ({
      id: item.item_id,
      name: item.item_name,
      unitPrice: item.price,
      available: availableItemIds.includes(item.item_id),
    }));

    return res.status(200).send({ message: "Items fetched successfully.", items: itemsWithAvailability });
  } catch (error) {
    console.error("Error in getItemAvailability API:", error);
    res.status(500).send({ message: "Internal server error", error: error.message });
  }
});

module.exports = router;

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
