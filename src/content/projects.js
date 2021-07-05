import React, { Component } from "react"

class Projects extends Component {
    render() {
        return (
            <div id="projects-container">
                {Array(10).fill().map(() => 
                <div className="project">
                    <img className="thumbnail" src="https://camo.githubusercontent.com/12b2dde6beed6ef1073ea61434cbdf129a7a459b69ce919aad1b8295ee728368/68747470733a2f2f626573682d6b616e2e6769746875622e696f2f686f6d652f696d616765732f6261636b67726f756e642e706e67" />
                    <ul>
                        <li>PHP</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                    <p><i className="fas fa-globe"/>: https://besh-kan.github.io/home/</p>
                    <p><i className="fab fa-github"/>: https://github.com/MainSilent/Besh-kan.git</p>
                </div>)}
            </div>
        )
    }
}

export default Projects