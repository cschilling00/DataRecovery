const { Faq } = require('../models/faqModel');

exports.findAllFaqs = (callback) => {
    Faq.find()
        .exec()
        .then(docs => {
            console.log(docs);
            callback(null, docs);
        })
        .catch(err => {
            console.log(('Error in retrieving faqs : ' + JSON.stringify(err, undefined, 2)));
            callback(err, null);
        })
};

exports.findFaqById = (id, callback) => {
    console.log(id);
    Faq.findById(id)
        .exec()
        .then(doc => {
            console.log(doc);
            callback(null, doc);
        })
        .catch(err => {
            console.log(('Error in retrieving faq : ' + JSON.stringify(err, undefined, 2)));
            callback(err, null);
        })
};

exports.saveNewFaq = (faq, callback) => {
    console.log(faq);
    faq.save()
        .then(result => {
            console.log(result);
            callback(null, result);
        })
        .catch(err => {
            console.log(('Error in saving faqs : ' + JSON.stringify(err, undefined, 2)));
            callback(err, null);
        })
};

exports.deleteFaqById = (id, callback) => {
    console.log(id);
    Faq.deleteOne({ _id: id})
        .exec()
        .then(result => {
            console.log(result);
            callback(null, result);
        })
        .catch(err => {
            console.log('Error in deleting faq : ' + JSON.stringify(err, undefined, 2));
            callback(err, null);
        });
};

exports.updateFaqById = (id, updateOps, callback) => {
    console.log(id);
    Faq.updateOne({ _id: id}, { $set: updateOps })
        .exec()
        .then(result => {
            console.log(result);
            callback(null, result);
        })
        .catch(err => {
            console.log('Error in updating faq : ' + JSON.stringify(err, undefined, 2));
            callback(err, null);
        });
};



