const fetch = require("node-fetch");
module.exports = async (req, res) => {
    require("dotenv").config();
    const key = process.env.API_KEY;

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&appid=${key}&units=metric`;

    let rawData = await fetch(url);
    let data = await rawData.json();

    res.json(data);
}