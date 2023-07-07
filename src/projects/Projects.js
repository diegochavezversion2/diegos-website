import React from "react";
import './Projects.css';
import EachProject from "./EachProject";
const projects = require('./projects.json')


function Projects() {
    return (
        <div>
            <h1 className="text-white" >My Best Projects</h1>
            {projects.map((project) => (
                <EachProject project={project}/>
            ))}
        </div>
    )
}

export default Projects;