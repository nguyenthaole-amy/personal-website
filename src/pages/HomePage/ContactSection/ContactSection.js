import React from "react";
import logo from "../../img/logo(1).png";
import "./ContactSection.css";

function ContactSection() {
    return (
        <div className="contact-container">
            <img className="logo" src={logo} alt="logo" height="50px"/>
            <div className="contact-name">Amy Le</div>
            <div className="contact-info">
                nguyenthao.le@outlook.com <br/>
                South Hadley, MA, 01075 <br/>
                linkedin.com/in/thao-le-amy/<br/>
            </div>
        </div>
    )
}

export default ContactSection;