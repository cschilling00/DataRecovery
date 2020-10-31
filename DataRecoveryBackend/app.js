const express = require('express');
const bodyParser = require('body-parser');

const dotenv = require('dotenv');
dotenv.config({ path: './config/app.env'});
// NICHT ENTFERNEN
const { mongoose } = require('./db.js')
const customerController = require('./controllers/customerController');
const productController = require('./controllers/productController');
const orderController = require('./controllers/orderController');

const app = express();



app.use( bodyParser.json());

app.use( (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
    return res.status(200).json({});
  }
  next();
});


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
