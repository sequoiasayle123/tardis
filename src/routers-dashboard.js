const express = require('express');

const app = express.Router();

app.get('/dashboard', (req, res) => {
    res.send("Student Dashboard");
})

app.get('/dashboard/course', (req, res) => {
    res.send("Course Dashboard");
})

module.exports = app;