import React, { Component } from "react"
import { Route } from "react-router-dom"
import { CSSTransition } from "react-transition-group"
import Projects from "./content/projects"
import Skills from "./content/skills"

const routes = [
    { path: '/', name: 'Projects', Component: Projects },
    { path: '/skills', name: 'Skills', Component: Skills },
    //{ path: '*', name: 'Skills', Component: <h1 style={{marginLeft: 20}}>404 - Page Not Found</h1> }
]

class Content extends Component {
    componentDidMount() {
        // Scroll the content when mouse is outside
        window.addEventListener("wheel", event => {
            const delta = Math.sign(event.deltaY);
            const elem = document.getElementById("content")
            if (!(elem.parentNode.querySelector(":hover") == elem))
                elem.scrollTop += (delta * 30)
        })
    }
    render() {
        return (
            <div id="content">
                {routes.map(({ path, Component }) => (
                    <Route key={path} exact path={path}>
                    {({ match }) => (
                        <CSSTransition in={match != null} timeout={300} classNames="page" unmountOnExit>
                        <div className="page">
                            <Component />
                        </div>
                        </CSSTransition>
                    )}
                    </Route>
                ))}
            </div>
        )
    }
}

export default Content