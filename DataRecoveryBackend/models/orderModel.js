const mongoose = require('mongoose'), Schema = mongoose.Schema;
const randtoken = require('rand-token');

const Order = mongoose.model('Order', {
    customer: {type: Schema.Types.ObjectId, ref: 'Customer'},
    product: {type: Schema.Types.ObjectId, ref: 'Product'},
    trackingId: {type: String,default: function () {
            return randtoken.generate(64)
        }},
    orderDate: {type: Date, default: Date.now()}
});


module.exports = { Order };
