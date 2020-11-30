import React, { Component } from 'react'



class Room extends Component {

    constructor(props){
        super(props);
        this.state = {
            votesToSkip: 2,
            guestCanPause: false,
            isHost: false
        }
        this.roomCode = this.props.match.param.roomCode
        this.getRoomDetails()
    }


    getRoomDetails = () => {

        fetch('/api/get-room' + '?code=' + this.roomCode)
            .then(response => response.json)
            .then(data => {
                this.setState({
                    votesToSkip: data.votes_to_skip,
                    guestCanPause: data.guest_can_pause,
                    isHost: data.is_host
                })
            })
    }



    render(){

        return (
            <div>
                <h3>{this.roomCode}</h3>
                <p>{this.state.votesToSkip}</p>
                <p>{this.state.guestCanPause.toString()}</p>
                <p>{this.state.isHost.toString()}</p>
            </div>
        )

    }


}




export default Room