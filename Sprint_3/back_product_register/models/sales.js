const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SalesSchema = Schema({
    clientID: {
        type: Number,
        require: true,
        min: 0,
        max: 999999999999999,
        unique: true
    },
    clientName: {
        type: String,
        require: true,
        min: 5,
        max: 60
    },
    sellerID: {
        type: Number,
        require: true,
        min: 6,
        max: 999999999999999,
        unique: true
    },
    sellerName: {
        type: String,
        require: true,
        min: 5,
        max: 60
    },
    prouctID: {
        type: String,
        require: true,
        min: 6,
        max: 100,
        unique: true
    },
    amount: {
        type: Number,
        require: true,
        min: 0,
        max: 999999999999999
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('sales', SalesSchema);