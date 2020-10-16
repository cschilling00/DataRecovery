const express = require('express');
const bodyParser = require('body-parser');

const dotenv = require('dotenv');
dotenv.config({ path: './config/app.env'});

const { mongoose } = require('./db.js')
const customerController = require('./controllers/customerController');
const productController = require('./controllers/productController');
const orderController = require('./controllers/orderController');

const app = express();



app.use( bodyParser.json());


app.use('/customers', customerController);
app.use('/products', productController);
app.use('/orders', orderController);

app.use(function(req, res) {
  res.status(404);
  res.send('Route does not exist');
});

app.listen(3000, () => {
  console.log(`App listening at http://localhost:3000`)
});


module.exports = app;
