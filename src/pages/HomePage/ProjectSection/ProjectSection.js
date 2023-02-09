import React, { useEffect } from "react";
import "./ProjectSection.css";
import avatar from "../../img/picture.jpeg"
import {ProjectList} from "./ProjectList";


function ProjectSection() {

    return (
        <>
            <div className="card"></div>
            <div className="project-container">
                <ul className="projects-list">
                    {ProjectList.map((items, index) => {
                        return (
                            <li key={index} className="links">
                                <div className={items.cName}>
                                    <a href={items.link} target="_blank"><img className="icon" src={items.icon} alt="project icon"/></a>
                                    <div className="title">{items.title}</div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default ProjectSection;