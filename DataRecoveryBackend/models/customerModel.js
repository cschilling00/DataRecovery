module.exports = (db) => {
    const Customer = db.sequelize.define("customer", {
        firstName: {
            type: db.Sequelize.STRING
        },
        lastName: {
            type: db.Sequelize.STRING
        },
        tel: {
            type: db.Sequelize.STRING
        },
        email: {
            type: db.Sequelize.STRING
        },
        postalCode: {
            type: db.Sequelize.STRING
        },
        city: {
            type: db.Sequelize.STRING
        },
        street: {
            type: db.Sequelize.STRING
        },
        houseNumber: {
            type: db.Sequelize.STRING
        }
    });

    return Customer;
};
