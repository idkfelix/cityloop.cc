const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const productSchema = new Schema({
    id: String,
    title: String,
    description: String,
    price: Number,
    images: [
        String,
    ],
    option_name: String,
    options: [
        {name: String,quantity:Number},
    ]
});

const Product = model('Product', productSchema);
module.exports = Product;