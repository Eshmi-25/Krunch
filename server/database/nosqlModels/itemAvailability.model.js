const mongoose = require('mongoose');
const { NUMBER } = require('sequelize');

const ItemAvailabilitySchema = new mongoose.Schema({
    fc_no: { type: Number, required: true, unique: true},
    item_list: { type: Array }
});

module.exports = mongoose.model('ItemAvailability', ItemAvailabilitySchema);