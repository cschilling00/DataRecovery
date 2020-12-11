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
db.admin = require('./model/adminModel')(db);
db.news = require('./model/newsModel')(db);

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
            {productName: "SSD",price: 50, category: "Flash"},
            {productName: "HDD",price: 80, category: "Flash"},

        ])
        db.faqs.bulkCreate([
            {question: "Test",answer: "Success" },
            {question: "Test2",answer: "Success2" }

        ])
        db.news.bulkCreate([
            {title: "40% Rabatt auf Ihre defekten Speicher",text: "Nur für Aufträge bis Silvester!" }

        ])
        db.orders.bulkCreate([
            { customerId: 1 },
            { customerId: 2 }

        ])
        db.admin.bulkCreate([
            { username: "Oro", password: "oro" }

        ])
    });

module.exports = db;
