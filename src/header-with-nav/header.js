import React from "react";
import Navigation from "./navigation";
import "./header.css"

function Header() {
    return (
        <header className="border-bottom border-warning">
            <div className="container-fluid text-white px-5">
                <div className="d-flex flex-row justify-content-between align-items-center p-3">       
                    <h1 className="header" >Diego Chavez</h1>
                    <Navigation />
                </div>
            </div>
        </header>
    )
}

export default Header;