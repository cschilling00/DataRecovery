module.exports = (db) => {
    const Faq = db.sequelize.define("faq", {
        question: {
            type: db.Sequelize.STRING
        },
        answer: {
            type: db.Sequelize.STRING
        }
    });

    return Faq;
};
