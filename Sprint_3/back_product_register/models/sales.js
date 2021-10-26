const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SalesSchema = Schema({
    clientID: {
        type: String,
        require: true
        /*min: 0,
        max: 99999,*/
    },
    clientName: {
        type: String,
        require: true
        /*min: 5,
        max: 60*/
    },
    sellerID: {
        type: String,
        require: true
        /*min: 6,
        max: 9999,*/
    },
    sellerName: {
        type: String,
        require: true
        /*min: 5,
        max: 60*/
    },
    productoID: {
        type: String,
        require: true
    },
    amount: {
        type: String,
        require: true
        /*min: 0,
        max: 9999*/
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('sales', SalesSchema);