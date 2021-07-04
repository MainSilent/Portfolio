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
                                <div key={i} className="skill">
                                    <img src={process.env.PUBLIC_URL + `/static/logo/${skill.name.toLowerCase()}.png`}/>
                                    {skill.name}
                                </div>   
                            )}
                        </div>
                    </div> 
                )}
            </div>
        )
    }
}

export default Skills