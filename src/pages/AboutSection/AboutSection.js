import React, { useEffect } from "react";
import "./AboutSection.css";
import avatar from "../img/picture.jpeg"


function AboutSection() {

    return (
        <>
            <div className="card"></div>
            <div className="about-container">
                <img src={avatar} className="pic" alt="profile"/>
                <div className="name">AMY (NGUYEN THAO) LE</div>
                <div className="bio">Hi! My name is Thao, you can also call me Amy. I am a Sophomore majoring in
                Computer Science at Mount Holyoke College. I enjoy drawing, coding and playing games. Nice to meet you!</div>
            </div>
        </>
    )
}

export default AboutSection;