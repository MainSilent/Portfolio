import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"
import { CSSTransition } from 'react-transition-group'
import Projects from "./content/projects"
import Skills from "./content/skills"

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
                <Switch>
                    <Route path='/skills' component={Skills}/>
                    <Route path='/' component={Projects} exact/>
                    <Route path='*' component={() => <h1 style={{marginLeft: 20}}>404 - Page Not Found</h1>}/>
                </Switch>
            </div>
        )
    }
}

export default Content