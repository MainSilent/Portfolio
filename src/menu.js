import React, { Component } from "react"
import { Link } from "react-router-dom";

class Menu extends Component {
    render() {
        return (
            <div id="menu">
                <Link to="/"><div className="item">Projects</div></Link>
                <Link to="/skills"><div className="item">Skills</div></Link>
            </div>
        )
    }
}

export default Menu