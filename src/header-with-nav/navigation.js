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
                    <button className="btn btn-outline-warning" onClick={goToClicked} >Contact</button>
                </li>
            </ul>
    )
}

export default Navigation;

// <a className="col text-white text-decoration-none" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/d1ego-chavez/" >LinkedIn</a>
// <a className="col text-white text-decoration-none" rel="noopener noreferrer" target="_blank" href="https://github.com/diegochavezversion2" >GitHub</a>