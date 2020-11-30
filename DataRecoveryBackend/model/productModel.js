module.exports = (db) => {
    const Product = db.sequelize.define("product", {
        productName: {
            type: db.Sequelize.STRING
        },
        price: {
            type: db.Sequelize.INTEGER
        },
        category: {
            type: db.Sequelize.STRING
        }
    });

    return Product;
};
