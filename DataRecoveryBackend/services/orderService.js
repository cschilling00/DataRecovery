const db = require('../db');

exports.findAllOrders = (callback) => {
    db.orders.findAll({include: [db.customers,db.products]})
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
    db.orders.findByPk(id,{include: [db.customers,db.products]})
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
    db.orders.create(order)
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
    db.orders.findByPk(id,{include: [db.customers,db.products]})
        .then(order => order.destroy())
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

exports.updateOrderById = (id, data, callback) => {
    console.log(id);
    db.orders.findByPk(id,{include: [db.customers,db.products]})
        .then(order => order.update(data))
        .then(result => {
            console.log(result);
            callback(null, result);
        })
        .catch(err => {
            console.log('Error in updating order : ' + JSON.stringify(err, undefined, 2));
            callback(err, null);
        });
}



