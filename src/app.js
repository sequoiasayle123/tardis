const express = require('express');
const dashboard = require('./routers-dashboard');
const animals = require('./routers-animals');

const app = express();

app.use(dashboard);
app.use(animals)

module.exports = app;