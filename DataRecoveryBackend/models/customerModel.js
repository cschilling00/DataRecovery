const mongoose = require('mongoose');

const Customer = mongoose.model('Customer', {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    tel: { type: Number, required: true },
    email: { type: String, required: true },
    city: { type: String, required: true },
    street: { type: String, required: true },
    houseNumber: { type: String, required: true },
    defectiveDevice: [ { type: String, required: true } ]
    // defectiveDevice: [{productdescription: String} ]
});

module.exports = { Customer };

// "defectiveDevice":[ {"productdescription": "Festplatte",
//     "productdescription":"USB- Stick"} ]

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
