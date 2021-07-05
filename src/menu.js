import React, { Component } from "react"
import { Link } from "react-router-dom";

class Menu extends Component {
    componentDidMount() {
        const content = document.getElementById("content")
        document.querySelectorAll(".item").forEach(elem => {
            elem.onclick = () => content.scrollTop = 0
        })
    }
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