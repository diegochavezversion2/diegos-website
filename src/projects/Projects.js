import React from "react";
import './Projects.css';
import EachProject from "./EachProject";
const projects = require('./projects.json')


function Projects() {

    return (
        <div>
            <h1 className="mb-5" >Projects</h1>
            {projects.map((project, index) => (
                <EachProject project={project} layout={index} key={index}/>
            ))}
        </div>
    )
}

export default Projects;