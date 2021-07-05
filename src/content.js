import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import Projects from "./content/projects"
import Skills from "./content/skills"

const routes = [
    { path: '/', name: 'Projects', Component: Projects },
    { path: '/skills', name: 'Skills', Component: Skills },
    { path: '*', name: '404', Component: () => <h1 style={{marginLeft: 20}}>404 - Page Not Found</h1> }
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
                <Route render={({location}) => (
                    <TransitionGroup>
                        <CSSTransition in={true} key={location.key} timeout={300} classNames="page" unmountOnExit>
                            <Switch location={location}>
                                <Route path='/skills' component={Skills}/>
                                <Route path='/' component={Projects} exact/>
                                <Route path='*' component={() => <h1 style={{marginLeft: 20}}>404 - Page Not Found</h1>}/>
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                )}/>
            </div>
        )
    }
}

export default Content