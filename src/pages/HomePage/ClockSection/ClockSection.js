import React, {useEffect, useState} from "react";
import "./ClockSection.css";
// import styled, { keyframes } from 'styled-components';

function ClockSection() {
    const [clock, setClock] = useState (new Date().getTime());

    useEffect(() => {
        const interval = setInterval(() => {
            setClock(new Date().getTime());
        }, 1000);

        return () => clearInterval(interval);
    });

    let offset = new Date().getTimezoneOffset()/60;

    return (
        <>
            <div className="clockContainer">
                <div className="clock">{new Date().toDateString()}</div>
                <div className="clock">{new Date().toLocaleTimeString()}</div>
                <div className="clock">GMT {offset > 0 ? `+${offset}` : offset}</div>
            </div>
        </>
    )
}

export default ClockSection;