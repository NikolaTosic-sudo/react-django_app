import React, { Component } from 'react'



class Room extends Component {

    constructor(props){
        super(props);
        this.state = {
            votesToSkip: 2,
            guestCanPause: false,
            isHost: false
        }
    }



    render(){

        return (
            <div>
                <p>{this.state.votesToSkip}</p>
                <p>{this.state.guestCanPause.toString()}</p>
                <p>{this.state.isHost.toString()}</p>
            </div>
        )

    }


}




export default Room