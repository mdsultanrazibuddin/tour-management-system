const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const tourRouter = require('./routes/tour.route');

//  routers 
// const productRouter = require('./routes/product.route.js');

// middleware 
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
});

// Posting and Getting to Database 
app.use('/api/v1/tour', tourRouter)

module.exports = app;