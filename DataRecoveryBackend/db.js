const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.customers = require('./model/customerModel')(db);
db.faqs = require('./model/faqModel')(db);
db.orders = require('./model/orderModel')(db);
db.products = require('./model/productModel')(db);

db.customers.hasMany(db.orders,{as: 'order', foreignKey: 'customerId'});
db.orders.belongsTo(db.customers);
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


sequelize.sync({ force: true })
    .then(() => {
        console.log(`Database & tables created!`);

        db.customers.bulkCreate([
            {firstName: "Thomas",lastName: "Schuehly",postalCode:71638 },
            {firstName: "Cassandra",lastName: "Schilling",postalCode:88433 }

        ])
        db.products.bulkCreate([
            {productName: "SSD",price: 50, category: "Flash"}

        ])
        db.faqs.bulkCreate([
            {question: "Test",answer: "Success" }

        ])
        db.orders.bulkCreate([
            { customerId: 1 }

        ])
    });

module.exports = db;
