import React from "react";

function EachProject({project}) {
    return (
        <div className="project">
            <h1>{project.title}</h1>
            {/* <img src={require(`${project.image}`)} alt={project.alt} /> */}
            <p>{project.description}</p>
            <p>Tech Stack: {project.techStack}</p>
        </div>
    )
}

export default EachProject;