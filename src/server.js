const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());


app.use(require('./routes'));

app.use((error, req, res, next) => {
  res.status(error.statusCode || 500).json({ error: error.message }); 
});

module.exports = app;