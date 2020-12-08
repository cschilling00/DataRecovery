const randtoken = require('rand-token');

module.exports = (db) => {
    const Order = db.sequelize.define("order", {
        trackingId: {
            type: db.Sequelize.STRING,
            defaultValue: function () {
                return randtoken.generate(8)
            }
        },
            orderDate: {
                type: db.Sequelize.DATE,
                defaultValue: db.Sequelize.NOW
        }
    });

    return Order;
};
