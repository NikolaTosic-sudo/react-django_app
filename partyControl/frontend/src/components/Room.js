import React, { Component } from 'react'



class Room extends Component {

    constructor(props){
        super(props);
        this.state = {
            votesToSkip: 2,
            guestCanPause: false,
            isHost: false
        }
        this.roomCode = this.props.match.params.roomCode
    }

    getRoomDetails = () => {

        fetch('/api/get-room' + '?code=' + this.roomCode)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    votesToSkip: data.votes_to_skip,
                    guestCanPause: data.guest_can_pause,
                    isHost: data.is_host
                })
            })
    }


    componentDidMount() {
        this.getRoomDetails()
    }



    render(){

        return (
            <div>
                <h3>{this.roomCode}</h3>
                <p>Votes: {this.state.votesToSkip}</p>
                <p>Can Pause: {this.state.guestCanPause.toString().toUpperCase()}</p>
                <p>Is Host: {this.state.isHost.toString().toUpperCase()}</p>
            </div>
        )

    }


}




export default Room