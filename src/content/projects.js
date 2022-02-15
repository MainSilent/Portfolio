import React, { Component } from "react"
import projects from "./projects.json"

projects.reverse()

class Projects extends Component {
    render() {
        return (
            <div id="projects-container">
                {projects.map((project, i) => 
                    <div className="project" key={i}>
                        <img className="thumbnail" src={project.thumbnail ?? '/static/no_thumbnail.png'} alt="thumbnail"/>
                        <p className="name">{project.name}</p>
                        <ul>
                            {project.skills.map((skill, i) => 
                                <li key={i}><img alt="skill" src={process.env.PUBLIC_URL + `/static/logo/${skill.toLowerCase()}.png`}/>{skill}</li>
                            )}
                        </ul>
                        <div className="line"/>
                        {project.url && <a href={project.url}><img alt="url" src={process.env.PUBLIC_URL+"static/globe.png"}/> {project.url}</a>}
                        {project.github && <a href={project.github}><img alt="github" src={process.env.PUBLIC_URL+"static/github.png"}/> {project.github}</a>}
                    </div>
                )}
            </div>
        )
    }
}

export default Projects