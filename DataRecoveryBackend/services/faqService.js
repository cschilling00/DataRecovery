const { Faq } = require('../model/faqModel');
const db = require('../db');

exports.findAllFaqs = (callback) => {
    db.faqs.findAll()
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
    db.faqs.findByPk(id)
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
    db.faqs.create(faq)
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
    db.faqs.findByPk(id)
        .then(faq => faq.destroy())
        .then(result => {
            console.log(result);
            callback(null, result);
        })
        .catch(err => {
            console.log('Error in deleting faq : ' + JSON.stringify(err, undefined, 2));
            callback(err, null);
        });
};

exports.updateFaqById = (id, data, callback) => {
    db.faqs.findByPk(id)
        .then(faq => faq.update(data))
        .then(result => {
            console.log(result);
            callback(null, result);
        })
        .catch(err => {
            console.log('Error in updating faq : ' + JSON.stringify(err, undefined, 2));
            callback(err, null);
        });
};



