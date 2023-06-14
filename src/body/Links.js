import React from 'react';

function Links() {

    function borderOn(e) {
        // e.target.style.borderColor = "#ffc600";
        e.target.className = "border border-warning";
        e.target.width = "250"
    }

    function borderOff(e) {
        e.target.className = ""
        e.target.width = "200"
    }

    return (
        <div className='d-flex flex-column justify-content-between'>
            <a href='https://restaurant-frontend-kbnj.onrender.com'>
                <img onMouseOver={borderOn} onMouseLeave={borderOff} src={require("../images/restaurant-reservation-app.png")} alt='screenshot of reservation app dashboard' width={200} />
            </a>
            {/* <a href='https://flashcard-app-yf4t.onrender.com'>
                <img onMouseOver={borderOn} onMouseLeave={borderOff} src={require("../images/flashcard-app.png")} width={200} />
            </a> */}
            <a href='https://recipe-tracking-app-3mqf.onrender.com'>
                <img onMouseOver={borderOn} onMouseLeave={borderOff} src={require("../images/recipe-tracking-app.png")} width={200} />
            </a>
        </div>
    )
}

export default Links;