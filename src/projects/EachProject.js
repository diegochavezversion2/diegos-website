import React from "react";
import "./EachProject.css";

function EachProject({layout, project}) {


    if (layout % 2 === 0) {
        return (
            <div className="project d-flex justify-content-around align-items-center mb-5">
                <div className="col-4">
                    <a rel="noopener noreferrer" target="_blank" href={`${project.link}`} >
                        <img 
                            className="projectImg"
                            src={project.image} 
                            alt={project.alt} 
                            width={500} 
                            height={300}
                        />
                    </a>
                </div>
                <div className="col">
                    <h3 className="text-warning">{project.title}</h3>
                    <p>{project.description}</p>
                    <p>Tech Stack: {project.techStack}</p>
                </div>
            </div>
        )
    } else {
        return (
            <div className="project d-flex justify-content-around align-items-center mb-5">
                <div className="col">
                    <h3 className="text-warning">{project.title}</h3>
                    <p>{project.description}</p>
                    <p>Tech Stack: {project.techStack}</p>
                </div>
                <div className="col-4">
                    <a rel="noopener noreferrer" target="_blank" href={`${project.link}`}>
                        <img 
                            className="projectImg"
                            src={project.image} 
                            alt={project.alt} 
                            width={500} 
                            height={300}
                        />
                    </a>
                </div>
            </div>
        )
    }
}

export default EachProject;