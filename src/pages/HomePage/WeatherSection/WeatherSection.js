import React, { useState, useEffect } from "react";
import './WeatherSection.css';
// import styled, { keyframes } from 'styled-components';

// require('dotenv').config()

function WeatherSection() {
    //longtitude, latitude of current location
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);

    const [data, setData] = useState([]); //json storing weather data
    const [weather, setWeather] = useState([]); //use for displaying information
    const api_key = `${process.env.REACT_APP_API_KEY}`;

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
        }, () => {
            setLong(-72.5745)
            setLat(42.2584)
        });

        fetch(`https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${api_key}`)
            .then(res => res.json()).then(result => {
                // console.log(result.cod)
                if (result.cod !== 200) {
                    setData("Loading...")
                    setWeather("Loading...")
                } else {
                    setData(result)
                    setWeather(
                        `You are in ${result.name}, ${result.sys.country}.
                                Description: ${result.weather[0].description}. 
                                Current Temperature: ${result.main.temp}\u00B0C. 
                                Feels like: ${result.main.feels_like}\u00B0C.`
                    )
                }
            }).catch((e) => console.log(e))
        // console.log(data);
        // console.log(weather);
    }, [weather, lat, long, data, api_key]);

    return (
        <>
            <div className="container">
                <div className="weather">
                    {weather}
                </div>
            </div>
        </>
    )
}

export default WeatherSection;