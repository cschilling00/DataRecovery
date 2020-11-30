const { Customer } = require('../model/customerModel');
const db = require('../db');

exports.findAllCustomers = (callback) => {
    db.customers.findAll()
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
    db.customers.findByPk(id)
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
    db.customers.create(customer)
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
    db.customers.findByPk(id)
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

exports.updateCustomerById = (id, data, callback) => {
    db.customers.findByPk(id)
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



