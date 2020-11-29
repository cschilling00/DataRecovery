const Sequelize = require('sequelize');
const Customer = require('./customerModel')
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.customers = require('./customerModel')(sequelize, Sequelize);
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
