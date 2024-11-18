const express = require('express');
const connection = require('./database/sql-connection');
const User = require('./database/models/user.model');
const FoodCourt = require('./database/models/food_court.model');
const Order = require('./database/models/order.model');
const Item = require('./database/models/item.model');
const OrderDetails = require('./database/models/order_details.model');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const authRouter = require('./api/auth');
const adminRouter = require('./api/admin');
const fcRouter = require('./api/food_court');
const userRouter = require('./api/user');
const cors = require('cors');
dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('John Doe');
});
app.use('/auth', authRouter);
app.use('/admin', adminRouter);
app.use('/fc', fcRouter);
app.use('/user', userRouter);


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
    await User.sync();
    await FoodCourt.sync();
    await Order.sync();
    await Item.sync();
    await OrderDetails.sync();
});