import React, { Component } from "react"
import { Route, Switch } from "react-router-dom";
import Projects from "./content/projects"
import Skills from "./content/skills"

class Content extends Component {
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