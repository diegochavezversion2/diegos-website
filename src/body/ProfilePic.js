import React from 'react';
import profilePic from "../images/profilePicture.jpg"
import "./ProfilePic.css";

function ProfilePic() {
    return (
        <div>
            <img className='profilePicImg' src={profilePic} alt='Man on laptop emoji' width={500} height={500}/>
        </div>
    )
}

export default ProfilePic;