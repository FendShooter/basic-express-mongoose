const express = require('express');
const mongoose = require('mongoose');
const hbs = require("hbs");
const path = require('path');
const publicPath = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templates/views');
const partialsPath= path.join(__dirname, '../templates/partials');

require('./db/dbconnect');
const router = require('./routes/router');

const app = express();
app.use(express.urlencoded({extended:true}))
app.use(express.static(publicPath))
app.set('view engine', 'hbs');
app.set('views',viewPath)
hbs.registerPartials(partialsPath);
app.use(express.json());
app.use(router)
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
  
})