const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = Schema({
    value: Number,
    description: String,
    state: Boolean
})

module.exports = mongoose.model('products', ProductSchema);