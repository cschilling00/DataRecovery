const mongoose = require('mongoose');

const Customer = mongoose.model('Customer', {
    firstName: { type: String},
    lastName: { type: String},
    tel: { type: Number},
    email: { type: String},
    city: { type: String},
    street: { type: String},
    houseNumber: { type: String}
});

module.exports = { Customer };

// const Customer = mongoose.model('Customer', {
//     firstName: String,
//     lastName: String,
//     contactInfo: {
//         tel: Number,
//         email: String,
//         address: {
//             city: String,
//             street: String,
//             houseNumber: String,
//         },
//     },
//     // defectiveDevice: [{productdescription: String} ]
// });
