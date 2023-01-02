import React, { useEffect } from "react";
import "./HomePage.css";
import AboutSection from "./AboutSection/AboutSection";
// import styled, { keyframes } from 'styled-components';

function HomePage() {
    useEffect(() => {
        document.title = "Amy Portfolio | Home"
    })

    return (
        <>
            <div className="mainPage">
                <div className="about">{<AboutSection/>}</div>
            </div>
        </>
    )
}

export default HomePage;