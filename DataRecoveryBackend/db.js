const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.customers = require('./models/customerModel')(db);
db.faqs = require('./models/faqModel')(db);
db.orders = require('./models/orderModel')(db);
db.products = require('./models/productModel')(db);

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
            {firstName: "Thomas",lastName: "Schuehly" }
        ]).then(function() {
            return db.customers.findAll();
        }).then(function(notes) {
            console.log(notes);
        });
    });

module.exports = db;
