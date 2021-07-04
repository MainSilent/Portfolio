import React, { Component } from "react"
import { Route, Switch } from "react-router-dom";

class Content extends Component {
    render() {
        return (
            <div id="content">
                <Switch>
                    <Route path='/' component={() => <h1>Projects</h1>} exact/>
                    <Route path='/skills' component={() => <h1>Skills</h1>} exact/>
                    <Route path='*' component={() => <h1 style={{marginLeft: 20}}>404 - Page Not Found</h1>}/>
                </Switch>
            </div>
        )
    }
}

export default Content