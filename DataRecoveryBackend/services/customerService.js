const { Customer } = require('../models/customerModel');

exports.findAllCustomers = (callback) => {
    Customer.find()
        .exec()
        .then(docs => {
            console.log(docs);
            callback(null, docs);
        })
        .catch(err => {
            console.log(('Error in retrieving customers : ' + JSON.stringify(err, undefined, 2)));
            callback(err, null);
        })
};

exports.findCustomerById = (id, callback) => {
    console.log(id);
    Customer.findById(id)
        .exec()
        .then(doc => {
            console.log(doc);
            callback(null, doc);
        })
        .catch(err => {
            console.log(('Error in retrieving customer : ' + JSON.stringify(err, undefined, 2)));
            callback(err, null);
        })
};

exports.saveNewCustomer = (customer, callback) => {
    console.log(customer);
    customer.save()
        .then(result => {
            console.log(result);
            callback(null, result);
        })
        .catch(err => {
            console.log(('Error in saving customers : ' + JSON.stringify(err, undefined, 2)));
            callback(err, null);
        })
};

exports.deleteCustomerById = (id, callback) => {
    console.log(id);
    Customer.deleteOne({ _id: id})
        .exec()
        .then(result => {
            console.log(result);
            callback(null, result);
        })
        .catch(err => {
            console.log('Error in deleting customer : ' + JSON.stringify(err, undefined, 2));
            callback(err, null);
        });
};

exports.updateCustomerById = (id, updateOps, callback) => {
    console.log(id);
    Customer.updateOne({ _id: id}, { $set: updateOps })
        .exec()
        .then(result => {
            console.log(result);
            callback(null, result);
        })
        .catch(err => {
            console.log('Error in updating customer : ' + JSON.stringify(err, undefined, 2));
            callback(err, null);
        });
};



