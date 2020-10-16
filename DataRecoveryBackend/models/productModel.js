const mongoose = require('mongoose');

const Product = mongoose.model('Product', {
    productName: {type: String},
    price: {type: Number},
    category: {type: String}
});

module.exports = { Product };
