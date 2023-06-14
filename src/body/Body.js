import React from 'react';
import AboutMe from './AboutMe';
import ProfilePic from './ProfilePic';
import Links from './Links';

function Body() {
    return (
        <div>
            <AboutMe />
            <div className='d-flex justify-content-around'>
                <ProfilePic />
                <Links />
            </div>
        </div>
    )
}

export default Body;