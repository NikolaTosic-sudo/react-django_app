import React, { Component } from 'react';
import { Grid, Button, Typography } from '@material-ui/core';



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

    leaveRoomButton = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        }
        fetch('/api/leave-room', requestOptions)
            .then(response => {
                this.props.history.push('/');
            })
    }



    render(){

        return (

            <Grid container spacing={1} align='center'>
                <Grid item xs={12}>
                    <Typography variant='h4' component='h4'>
                        Code: {this.roomCode}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='h6' component='h6'>
                        Votes: {this.state.votesToSkip}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='h6' component='h6'>
                        Can Pause: {this.state.guestCanPause.toString().toUpperCase()}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='h6' component='h6'>
                        Is Host: {this.state.isHost.toString().toUpperCase()}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Button variant='contained' color='secondary' onClick={this.leaveRoomButton}>
                        Leave Room
                    </Button>
                </Grid>
            </Grid>
        )

    }


}




export default Room