const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const mongoConnect = async() => {
    const connectionUri = process.env.MONGO_URI;
    mongoose.connect(connectionUri, {}).catch((err)=>{console.log(err)});
    console.log("Connected to MongoDB");
};

module.exports = mongoConnect;