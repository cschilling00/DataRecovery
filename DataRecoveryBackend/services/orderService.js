const { Order } = require('../models/orderModel');

exports.findAllOrders = (callback) => {
    Order.find()
        .populate(['customer','product'])
        .exec()
        .then(docs => {
            console.log(docs);
            callback(null, docs);
        })
        .catch(err => {
            console.log(('Error in retrieving orders : ' + JSON.stringify(err, undefined, 2)));
            callback(err, null);
        })
};

exports.findOrderById = (id, callback) => {
    console.log(id);
    Order.findOne()
    Order.findById(id)
        .populate(['customer','product'])
        .exec()
        .then(doc => {
            console.log(doc);
            callback(null, doc);
        })
        .catch(err => {
            console.log(('Error in retrieving order : ' + JSON.stringify(err, undefined, 2)));
            callback(err, null);
        })
};

exports.saveNewOrder = (order, callback) => {
    console.log(order);
    order.save()
        .then(result => {
            console.log(result);
            callback(null, result);
        })
        .catch(err => {
            console.log(('Error in saving orders : ' + JSON.stringify(err, undefined, 2)));
            callback(err, null);
        })
};

exports.deleteOrderById = (id, callback) => {
    console.log(id);
    Order.deleteOne({ _id: id})
        .exec()
        .then(result => {
            console.log(result);
            callback(null, result);
        })
        .catch(err => {
            console.log('Error in deleting order : ' + JSON.stringify(err, undefined, 2));
            callback(err, null);
        });
};

exports.updateOrderById = (id, updateOps, callback) => {
    console.log(id);
    Order.updateOne({_id: id}, {$set: updateOps})
        .populate(['customer', 'product'])
        .exec()
        .then(result => {
            console.log(result);
            callback(null, result);
        })
        .catch(err => {
            console.log('Error in updating order : ' + JSON.stringify(err, undefined, 2));
            callback(err, null);
        });
}



