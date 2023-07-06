import React from "react";
import {useHistory} from "react-router-dom";

function Navigation() {
    const history = useHistory();

    function goHome(event) {
        const buttonPressed = event.target.innerHTML.toLowerCase();
        buttonPressed === "home" ? history.push(`/`) : history.push(`/${buttonPressed}`)
    }

    return (
            <ul className="nav" >
                <li>
                    <button className="btn text-white mr-3" onClick={goHome} >Home</button>
                </li>
                <li>
                    <button className="btn text-white mr-3" onClick={goHome} >Resume</button>
                </li>
                <li>
                    <button className="btn text-white mr-3" onClick={goHome} >Projects</button>
                </li>
                <li>
                    <button className="btn btn-outline-warning" onClick={goHome} >Contact</button>
                </li>
            </ul>
    )
}

export default Navigation;

// <a className="col text-white text-decoration-none" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/d1ego-chavez/" >LinkedIn</a>
// <a className="col text-white text-decoration-none" rel="noopener noreferrer" target="_blank" href="https://github.com/diegochavezversion2" >GitHub</a>