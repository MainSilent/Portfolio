import React, { Component } from "react"
import skills from "./skills.json"

class Skills extends Component {
    render() {
        return (
            <div id="skills-container">
                {Object.keys(skills).map(key => 
                    <div key={key}>
                        <div className="separator">{key}</div>
                        {skills[key].map((skill, i) => 
                            <p key={i}>{skill.name}</p>   
                        )}
                    </div> 
                )}
            </div>
        )
    }
}

export default Skills