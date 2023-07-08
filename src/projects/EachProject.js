import React from "react";

function EachProject({layout, project}) {
    // console.log("HERE", project.image)

    if (layout % 2 === 0) {
        return (
            <div className="project d-flex justify-content-around">
                <div className="col-4">
                    <a className="btn btn-outline-warning" rel="noopener noreferrer" target="_blank" href={`${project.link}`}>Link To Deployed Sites<br></br>Images Coming Soon</a>
                </div>
                <div className="col">
                    <h1>{project.title}</h1>
                    {/* <img src={require(`${project.image}`)} alt={project.alt} /> */}
                    <p>{project.description}</p>
                    <p>Tech Stack: {project.techStack}</p>
                </div>
            </div>
        )
    } else {
        return (
            <div className="project d-flex justify-content-around">
                <div className="col">
                    <h1>{project.title}</h1>
                    {/* <img src={require(`${project.image}`)} alt={project.alt} /> */}
                    <p>{project.description}</p>
                    <p>Tech Stack: {project.techStack}</p>
                </div>
                <div className="col-4">
                    <a className="btn btn-outline-warning" rel="noopener noreferrer" target="_blank" href={`${project.link}`}>Link To Deployed Sites<br></br>Images Coming Soon</a>
                </div>
            </div>
        )
    }
}

export default EachProject;