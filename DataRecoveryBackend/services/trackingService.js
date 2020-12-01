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
