const { Admin } = require('../model/adminModel');
const db = require('../db');

exports.findAllAdmins = (callback) => {
    db.admin.findAll()
        .then(docs => {
            console.log(docs);
            callback(null, docs);
        })
        .catch(err => {
            console.log(('Error in retrieving admins : ' + JSON.stringify(err, undefined, 2)));
            callback(err, null);
        })
};

exports.findAdminById = (id, callback) => {
    console.log(id);
    db.admin.findByPk(id)
        .then(doc => {
            console.log(doc);
            callback(null, doc);
        })
        .catch(err => {
            console.log(('Error in retrieving admin : ' + JSON.stringify(err, undefined, 2)));
            callback(err, null);
        })
};

exports.saveNewAdmin = (admin, callback) => {
    db.admin.create(admin)
        .then(result => {
            console.log(result);
            callback(null, result);
        })
        .catch(err => {
            console.log(('Error in saving admins : ' + JSON.stringify(err, undefined, 2)));
            callback(err, null);
        })
};

exports.deleteAdminById = (id, callback) => {
    db.admin.findByPk(id)
        .then(admin => admin.destroy())
        .then(result => {
            console.log(result);
            callback(null, result);
        })
        .catch(err => {
            console.log('Error in deleting admin : ' + JSON.stringify(err, undefined, 2));
            callback(err, null);
        });
};

exports.updateAdminById = (id, data, callback) => {
    db.admin.findByPk(id)
        .then(admin => admin.update(data))
        .then(result => {
            console.log(result);
            callback(null, result);
        })
        .catch(err => {
            console.log('Error in updating admin : ' + JSON.stringify(err, undefined, 2));
            callback(err, null);
        });
};



