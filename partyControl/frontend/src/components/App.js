import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import HomePage from './HomePage'

export default class App extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <h1>TESTING CODE</h1>
                <HomePage />
            </div>
        )
    }
}

const appDiv = document.getElementById('app');

ReactDOM.render(<App />, appDiv);
