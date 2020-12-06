const db = require('../db');
exports.validateCustomer = (pPostalCode,pTrackingId, callback) => {
    db.orders.findOne({where: {trackingId: pTrackingId}, include: db.customers})
        .then(result => {
            if(result && result.customer && result.customer.postalCode.toString() === pPostalCode.toString()){
                callback(null,result);
            }else{
                callback("Could not find matching order",null)
            }}).catch(
            err => console.log(err)
    )
};

exports.validateAdmin = (pUsername, pPassword, callback) => {
    console.log("pUsername: "+ pUsername+ " pPassword: "+pPassword);
    db.admin.findOne({where: {username: pUsername}})
        .then(result => {
            if(result && result.password && result.password.toString() === pPassword.toString()) {
                callback(null,result);
            }else{
                callback("Could not find validate login",null)
            }}).catch(
        err => console.log(err)
    )
};
