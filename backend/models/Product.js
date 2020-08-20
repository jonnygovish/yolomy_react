const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// Create Schema
let productSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    quantity: Number,
    photo:String

})

let Product = mongoose.model('Product', productSchema)

module.exports = Product;