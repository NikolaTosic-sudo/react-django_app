import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'

import CreateRoomPage from "./CreateRoomPage"
import JoinRoomPage from "./JoinRoomPage"
import Room from './Room'

class HomePage extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <Router>
                <Switch>
                    <Route exact path="/"><p>Home Page</p></Route>
                    <Route path="/create/" component={CreateRoomPage} />
                    <Route path="/join/" component={JoinRoomPage} />
                    <Route path="/room/:roomCode" component={Room} />
                </Switch>
            </Router>
        )
    }
}

export default HomePage