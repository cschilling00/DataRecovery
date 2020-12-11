const { News } = require('../model/newsModel');
const db = require('../db');

exports.findAllNews = (callback) => {
    db.news.findAll()
        .then(docs => {
            console.log(docs);
            callback(null, docs);
        })
        .catch(err => {
            console.log(('Error in retrieving news : ' + JSON.stringify(err, undefined, 2)));
            callback(err, null);
        })
};

exports.findNewsById = (id, callback) => {
    console.log(id);
    db.news.findByPk(id)
        .then(doc => {
            console.log(doc);
            callback(null, doc);
        })
        .catch(err => {
            console.log(('Error in retrieving news by id : ' + JSON.stringify(err, undefined, 2)));
            callback(err, null);
        })
};

exports.saveNewNews = (news, callback) => {
    db.news.create(news)
        .then(result => {
            console.log(result);
            callback(null, result);
        })
        .catch(err => {
            console.log(('Error in saving news : ' + JSON.stringify(err, undefined, 2)));
            callback(err, null);
        })
};

exports.deleteNewsById = (id, callback) => {
    db.news.findByPk(id)
        .then(news => news.destroy())
        .then(result => {
            console.log(result);
            callback(null, result);
        })
        .catch(err => {
            console.log('Error in deleting news : ' + JSON.stringify(err, undefined, 2));
            callback(err, null);
        });
};

exports.updateNewsById = (id, data, callback) => {
    db.news.findByPk(id)
        .then(news => news.update(data))
        .then(result => {
            console.log(result);
            callback(null, result);
        })
        .catch(err => {
            console.log('Error in updating news : ' + JSON.stringify(err, undefined, 2));
            callback(err, null);
        });
};



