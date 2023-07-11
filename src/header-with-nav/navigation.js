import React from "react";
import {useHistory} from "react-router-dom";

function Navigation() {
    const history = useHistory();

    function goToClicked(event) {
        const buttonPressed = event.target.innerHTML.toLowerCase();
        buttonPressed === "home" ? history.push(`/`) : history.push(`/${buttonPressed}`)
    }

    return (
            <ul className="nav" >
                <li>
                    <button className="btn text-white mr-3" onClick={goToClicked} >Home</button>
                </li>
                <li>
                    <button className="btn text-white mr-3" onClick={goToClicked} >Resume</button>
                </li>
                <li>
                    <button className="btn text-white mr-3" onClick={goToClicked} >Projects</button>
                </li>
                <li>
                    <a className="btn text-white" href="#contact" >Contact</a>
                </li>
            </ul>
    )
}

export default Navigation;