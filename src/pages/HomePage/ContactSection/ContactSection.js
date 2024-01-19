import React from "react";
import logo from "../../img/logo(1).png";
import "./ContactSection.css";

function ContactSection() {
    return (
        <div className="contact-container">
            {/* <img className="logo" src={logo} alt="logo" height="50px" /> */}
            <div className="contact-name">Amy Le</div>
            <div className="contact-info">
                Email: le46t@mtholyoke.edu <br />
                LinkedIn: linkedin.com/in/thao-le-amy/<br />
                South Hadley, MA, 01075 <br />
            </div>
        </div>
    )
}

export default ContactSection;