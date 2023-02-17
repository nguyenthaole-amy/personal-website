import React, { useState, useEffect } from "react";
import './WeatherSection.css';
// import styled, { keyframes } from 'styled-components';

function WeatherSection() {

    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [data, setData] = useState([]);
    const [weather, setWeather] = useState([]);

    useEffect(()=> {
        const fetchData = async () => {
            navigator.geolocation.getCurrentPosition(position => {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
            }, () => {
                setLong(-72.5745)
                setLat(42.2584)
            });

            await fetch (`http://localhost:5000/weather/:lat=${lat}&:long=${long}`)
                .then(res => res.json()).then(result => {
                    setData(result)
                    setWeather(
                        `You are in ${result.sys.country}.
                            Description: ${result.weather[0].description}. 
                            Current Temperature: ${result.main.temp}\u00B0C. 
                            Feels like: ${result.main.feels_like}\u00B0C.`
                    )
                    console.log(result)
                }).catch((e) => console.log(e))
        }

        fetchData()
        console.log(data);
    }, [lat, long]);

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