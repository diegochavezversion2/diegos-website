import React, {useState} from "react";
import './Projects.css';
import EachProject from "./EachProject";
const projects = require('./projects.json')


function Projects() {

    return (
        <div>
            <h1 className="text-white" >My Best Projects</h1>
            {projects.map((project, index) => (
                <EachProject project={project} layout={index} key={index}/>
            ))}
        </div>
    )
}

export default Projects;