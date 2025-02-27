const express = require('express');
require("dotenv").config();

const app = express();
const port = process.env.PORT;
const key = process.env.API_KEY;

app.use(express.static('public'));

app.get('/api', async (req, res) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&appid=${key}&units=metric`;

    let rawData = await fetch(url);
    let data = await rawData.json();

    res.json(data);
})

app.listen(port, () => {
    console.log("Server is now active!");
});