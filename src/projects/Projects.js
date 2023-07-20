import React from "react";
import EachProject from "./EachProject";
import projectsData from "./projectsData";
import {motion} from "framer-motion"

function Projects() {
    
    return (
        <motion.div 
            initial={{opacity: 0}} 
            animate={{opacity: 1, transition: {duration: 1}}} 
            // exit={{opacity: 0, transition: {duration: 0.5}}}
        >
            <h1 className="mb-5" >Projects</h1>
            {projectsData.map((project, index) => (
                <EachProject project={project} layout={index} key={index}/>
            ))}
        </motion.div>
    )
}

export default Projects;