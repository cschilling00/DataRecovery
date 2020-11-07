const { Order } = require('../models/orderModel');
exports.validateCustomer = (pPostalCode,pTrackingId, callback) => {
    Order.find({trackingId:pTrackingId}).populate(['customer','product']).exec().then(result => {
        callback(null,result.filter(order => order.customer !== undefined && order.customer.postalCode === pPostalCode))
    })
};
