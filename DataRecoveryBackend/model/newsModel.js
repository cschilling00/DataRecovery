module.exports = (db) => {
    const News = db.sequelize.define("news", {
        title: {
            type: db.Sequelize.STRING
        },
        text: {
            type: db.Sequelize.STRING
        }
    });

    return News;
};
