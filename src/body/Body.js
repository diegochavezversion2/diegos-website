import React from 'react';
import AboutMe from './AboutMe';
import ProfilePic from './ProfilePic';

function Body() {
    return (
        <div>
            <div className='d-flex justify-content-around p-5'>
                <div className="col">
                    <AboutMe />
                </div>
                <div className="col">
                    <ProfilePic />   
                </div>
            </div>
        </div>
    )
}

export default Body;