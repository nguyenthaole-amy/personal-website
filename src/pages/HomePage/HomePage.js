import React, { useEffect } from "react";
import "./HomePage.css";
import AboutSection from "../AboutSection/AboutSection";
import WeatherSection from "./WeatherSection/WeatherSection";
import ClockSection from "./ClockSection/ClockSection";
import ContactSection from "./ContactSection/ContactSection";
// import styled, { keyframes } from 'styled-components';

function HomePage() {
    useEffect(() => {
        document.title = "Amy Portfolio | Home"
    })

    return (
        <>
            <div className="mainPage">
                <div className="clock">{<ClockSection />}</div>
                <div className="weather">{<WeatherSection />}</div>
                <div id="contact">{<ContactSection />}</div>
            </div>
        </>
    )
}

export default HomePage;