const { Product } = require('../models/productModel');

exports.findAllProducts = (callback) => {
    Product.find()
        .exec()
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
    Product.findById(id)
        .exec()
        .then(doc => {
            console.log(doc);
            callback(null, doc);
        })
        .catch(err => {
            console.log(('Error in retrieving product : ' + JSON.stringify(err, undefined, 2)));
            callback(err, null);
        })
};

exports.saveNewProduct = (product, callback) => {
    console.log(product);
    product.save()
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
    console.log(id);
    Product.deleteOne({ _id: id})
        .exec()
        .then(result => {
            console.log(result);
            callback(null, result);
        })
        .catch(err => {
            console.log('Error in deleting product : ' + JSON.stringify(err, undefined, 2));
            callback(err, null);
        });
};

exports.updateProductById = (id, updateOps, callback) => {
    console.log(id);
    Product.updateOne({ _id: id}, { $set: updateOps })
        .exec()
        .then(result => {
            console.log(result);
            callback(null, result);
        })
        .catch(err => {
            console.log('Error in updating product : ' + JSON.stringify(err, undefined, 2));
            callback(err, null);
        });
};



