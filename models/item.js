const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    numberInStock: {
        type: Number,
        required: true
    }, 
    itemURL: {
        type: String
    }
})

const Item = mongoose.model('Item', itemSchema)
module.exports = Item