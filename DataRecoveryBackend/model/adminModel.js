module.exports = (db) => {
    const Admin = db.sequelize.define("admins", {
        username: {
            type: db.Sequelize.STRING
        },
        password: {
            type: db.Sequelize.STRING
        }
    });
    return Admin;
};

