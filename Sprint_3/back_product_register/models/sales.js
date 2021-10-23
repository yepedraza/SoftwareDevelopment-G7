const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SalesSchema = Schema({
    clientID: {
        type: 'int',
        require: true,
        min: 6,
        max: 100,
        unique: true
    },
    clientName: {
        type: 'string',
        require: true,
        min: 5,
        max: 60
    },
    sellerID: {
        type: 'int',
        require: true,
        min: 6,
        max: 100,
        unique: true
    },
    sellerName: {
        type: 'string',
        require: true,
        min: 5,
        max: 60
    },
    prouctID: {
        type: 'string',
        require: true,
        min: 6,
        max: 100,
        unique: true
    },
    amount: {
        type: 'int',
        require: true,
        min: 8,
        max: 300
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('sales', SalesSchema);