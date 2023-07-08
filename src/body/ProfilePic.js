import React from 'react';

function ProfilePic() {
    return (
        <div>
            <img src={require("../images/profilePicture.jpg")} alt='Man on laptop emoji' width={500} height={500}/>
        </div>
    )
}

export default ProfilePic;