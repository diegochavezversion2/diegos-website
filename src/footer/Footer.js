import React from "react";
import "./Footer.css"
import SocialLinks from "./SocialLinks";

function Footer() {
    return (
        <div id="contact" className="border-top border-warning py-3">
            <p className="footerHeader">Contact Me</p>
            <SocialLinks />    
        </div>
    )
}

export default Footer;