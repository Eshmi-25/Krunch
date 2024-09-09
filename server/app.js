const express = require('express');
const connection = require('./database/sql-connection');
const User = require('./database/models/user.model');
const FoodCourt = require('./database/models/food_court.model');
const Order = require('./database/models/order.model');
const Item = require('./database/models/item.model');
const OrderDetails = require('./database/models/order_details.model');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.send('John Doe');
});

const PORT = process.env.PORT || 3000;
app.listen(3000, async() => {
    console.log('Server is running on port', PORT);
    connection.authenticate()
        .then(() => {
            console.log('Database connected');
        })
        .catch(err => {
            console.log('Error:', err);
        });
    
    await OrderDetails.drop();
    await Order.drop();
    await User.drop();
    await FoodCourt.drop();
    await Item.drop();

    await User.sync({ force: true });
    await FoodCourt.sync({ force: true });
    await Order.sync({ force: true });
    await Item.sync({ force: true });
    await OrderDetails.sync({ force: true });
});