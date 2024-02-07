const express = require('express');

const app = express.Router();

app.get('/animals', (req, res) => {
    res.sendfile('/HomePage.html');
})

module.exports = app;