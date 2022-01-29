import React, { Component } from "react"
import { NavLink as Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faTasks, faCertificate } from '@fortawesome/free-solid-svg-icons'

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
                <Link to="/skills">
                    <div className="item"><FontAwesomeIcon icon={faBook} /> Skills</div>
                </Link>
                <Link to="/" exact>
                    <div className="item"><FontAwesomeIcon icon={faTasks} /> Projects</div>
                </Link>
                <Link to="/certificates">
                    <div className="item"><FontAwesomeIcon icon={faCertificate} /> Certificates</div>
                </Link>
            </div>
        )
    }
}

export default Menu