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
            {firstName: "Cassandra",lastName: "Schilling",tel: "015249788", email: "cassandra@test.de",
                postalCode: "88433", city: "Ingerkingen", street: "Hauptstr.", houseNumber: "24"},
            {firstName: "Elvira",lastName: "Kraft",tel: "015212368", email: "elvira@test.de", postalCode: "71638",
                city: "Ludwigsburg", street: "Mörikestr.", houseNumber: "12"},
            {firstName: "Thomas",lastName: "Moll",tel: "0154664", email: "thomas@test.de", postalCode: "71638",
                city: "Ludwigsburg", street: "Friedrichstr.", houseNumber: "53"}

        ])
        db.products.bulkCreate([
            {productName: "HDD-Festplatte mit bis zu 500GB",price: 250.00, category: "HDD"},
            {productName: "HDD-Festplatte mit bis zu 1TB",price: 330.00, category: "HDD"},
            {productName: "HDD-Festplatte mit bis zu 2TB",price: 490.00, category: "HDD"},
            {productName: "SSD-Festplatte mit bis zu 500GB",price: 150.00, category: "SSD"},
            {productName: "SSD-Festplatte mit bis zu 1TB",price: 230.00, category: "SSD"},
            {productName: "SSD-Festplatte mit bis zu 2TB",price: 390.00, category: "SSD"},
            {productName: "Mikro SD-Karte mit bis zu 32GB",price: 150.00, category: "SD"},
            {productName: "Mikro SD-Karte mit bis zu 64GB",price: 175.00, category: "SD"},
            {productName: "Mikro SD-Karte mit bis zu 128GB",price: 225.00, category: "SD"},
            {productName: "SD-Karte/ USB-Stick mit bis zu 16GB",price: 100.00, category: "Flash"},
            {productName: "SD-Karte/ USB-Stick mit bis zu 32GB",price: 125.00, category: "Flash"},
            {productName: "SD-Karte/ USB-Stick mit bis zu 64GB",price: 150.00, category: "Flash"},
            {productName: "SD-Karte/ USB-Stick mit bis zu 128GB",price: 175.00, category: "Flash"},
            {productName: "formatierte Festplatte (bis 2TB)",price: 79.00, category: "formatierter Datenträger"},
            {productName: "formatierte SD-Karte (bis 64GB)",price: 39.00, category: "formatierter Datenträger"},
            {productName: "formatierte USB-Stick (bis 64GB)",price: 39.00, category: "formatierter Datenträger"}

        ])
        db.faqs.bulkCreate([
            {question: "Mit welchen Kosten muss gerechnet werden?",answer: "Es gibt keine versteckten Kosten. " +
                    "Die Kosten können Sie dem Abschnitt Preise und Auftrag von der Webseite entnehmen. Zusätzlich kommen " +
                    "die Gebühren Ihrer Paketdienste für den Hinversand. Bitte verwenden Sie dafür eine versicherte Methode mit " +
                    "Trackingnummer. Der Rückversand ist kostenlos und selbstverständlich versichert (über DHL)." },
            {question: "Muss ich auch zahlen, wenn eine Datenrettung nicht mehr möglich ist?",answer: "Nein, Ihnen wird kostenfrei " +
                    "Ihr Datenträger wieder zurückgesendet" }

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
