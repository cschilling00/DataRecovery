const { Product } = require('../model/customerModel');
const db = require('../db');

exports.findAllProducts = (callback) => {
    db.products.findAll()
        .then(docs => {
            console.log(docs);
            callback(null, docs);
        })
        .catch(err => {
            console.log(('Error in retrieving products : ' + JSON.stringify(err, undefined, 2)));
            callback(err, null);
        })
};

exports.findProductById = (id, callback) => {
    console.log(id);
    db.products.findByPk(id)
        .then(doc => {
            console.log(doc);
            callback(null, doc);
        })
        .catch(err => {
            console.log(('Error in retrieving customer : ' + JSON.stringify(err, undefined, 2)));
            callback(err, null);
        })
};

exports.saveNewProduct = (customer, callback) => {
    db.products.create(customer)
        .then(result => {
            console.log(result);
            callback(null, result);
        })
        .catch(err => {
            console.log(('Error in saving products : ' + JSON.stringify(err, undefined, 2)));
            callback(err, null);
        })
};

exports.deleteProductById = (id, callback) => {
    db.products.findByPk(id)
        .then(customer => customer.destroy())
        .then(result => {
            console.log(result);
            callback(null, result);
        })
        .catch(err => {
            console.log('Error in deleting customer : ' + JSON.stringify(err, undefined, 2));
            callback(err, null);
        });
};

exports.updateProductById = (id, data, callback) => {
    db.products.findByPk(id)
        .then(customer => customer.update(data))
        .then(result => {
            console.log(result);
            callback(null, result);
        })
        .catch(err => {
            console.log('Error in updating customer : ' + JSON.stringify(err, undefined, 2));
            callback(err, null);
        });
};



