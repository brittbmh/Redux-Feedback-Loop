import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from './../Review/Review.js';
import Button from '@material-ui/core/Button';
import Rating from './../Rating/Rating.js';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

class Feelings extends Component {
    constructor() {
        super();
        this.state = {
            feelings: 0
        }
    }

    //update state to capture input
    changeFeelings = (event) => {
        this.setState({
            feelings: event
        });
    }

    //update Store with feelings rating
    sendFeelings = (event) => {
        event.preventDefault();
        const feelings = this.state.feelings;
        const action = { type: 'UPDATE_FEELINGS', payload: feelings };
        this.props.dispatch(action);
        this.props.history.push('/Understanding');
    }

    render() {
        return (
            <div>
                <div className="feedbackDiv">
                    <h3>How are you feeling today?</h3>
                    {/* <input type="text" onChange={this.changeFeelings} placeholder="enter 1-5" /> */}
                    <Rating feedback="Feelings" send={this.changeFeelings}/>
                    <br />
                    <br />
                    <Button variant="contained" color="primary" margin="theme.spacing.unit" className="button" onClick={this.sendFeelings}>Next</Button>
                </div>
                <br />
                <Review />
            </div>
        )
    }
}

export default connect()(Feelings);