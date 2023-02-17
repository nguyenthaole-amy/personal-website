const express = require("express");
const request = require("request");

const PORT = process.env.PORT || 5000;

const app = express();

require('dotenv').config();

const api_key = `${process.env.REACT_APP_API_KEY}`;
let coords = {
    lat: 42.25746137188944,
    long: -72.57389907474222
}
let weather;

app.get("/weather/:lat&:long", (req, res) => {
    coords.lat = req.params.lat;
    coords.long = req.params.long;

    let url = `http://api.openweathermap.org/data/2.5/weather/?lat=${coords.lat}&lon=${coords.long}&units=metric&APPID=${api_key}`;

    request(url, (err, respond, body) => {
        try {
            weather = JSON.parse(body);
            console.log(coords.long);
            console.log(coords.lat);
            console.log(weather);
        } catch (err) {
            console.log(err);
        }
    })
    res.json(weather);
})

app.post("/weather/:lat&:long", (req, res) => {


})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});