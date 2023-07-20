import React from 'react';
import AboutMe from './AboutMe';
import ProfilePic from './ProfilePic';
import {motion} from "framer-motion"

function Body() {
    return (
        <motion.div 
            initial={{opacity: 0}} 
            animate={{opacity: 1, transition: {duration: 1}}} 
            // exit={{opacity: 0, transition: {duration: 0.5}}}
        >
            <div className='d-flex justify-content-around align-items-center p-5'>
                <div className="col">
                    <AboutMe />
                </div>
                <div className="col">
                    <ProfilePic />   
                </div>
            </div>
        </motion.div>
    )
}

export default Body;