import React, { Component } from "react"
import skills from "./skills.json"

class Skills extends Component {
    render() {
        return (
            <div id="skills-container">
                {Object.keys(skills).map(key => 
                    <div key={key}>
                        <div className="separator">{key}</div>

                        <div className="row">
                            {skills[key].map((skill, i) => 
                                <a key={i} className="skill" href={skill.url}>
                                    <img src={process.env.PUBLIC_URL + `/static/logo/${skill.name === "C#" ? "csharp" : skill.name.toLowerCase()}.png`} alt={skill.name}/>
                                    <p>{skill.name}</p>
                                </a>   
                            )}
                        </div>
                    </div> 
                )}
            </div>
        )
    }
}

export default Skills