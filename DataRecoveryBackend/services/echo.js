const echoModel = require('../models/echo');

exports.saveEcho = (message, callback) => {
    echoModel.createEchoLog(message, (err, data) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, `Your message '${data.message}' was saved.`);
        }
    });
}
exports.listEchos = (containsString, callback) => {
    echoModel.getEchosContains(containsString, (err, data) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, data);
        }
    });
}
