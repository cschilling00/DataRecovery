const express = require('express');
const bodyParser = require('body-parser');

const dotenv = require('dotenv');
dotenv.config({ path: './config/app.env'});

const { mongoose } = require('./models/db.js')
const echoController = require('./controllers/echo');
const logger = require('./util/logger')

const app = express();



app.use(bodyParser.json());
app.use(logger.logToConsole);


app.use('/echo', echoController);

app.use(function(req, res) {
  res.status(404);
  res.send('Route does not exist');
});

app.listen(process.env.NODE_PORT, () => {
  console.log(`App listening at http://localhost:${process.env.NODE_PORT}`)
});


module.exports = app;
