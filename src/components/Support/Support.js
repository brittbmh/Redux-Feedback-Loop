import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from './../Review/Review.js';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

class Support extends Component {
    constructor() {
        super();
        this.state = {
            understanding: 0
        }
    }

    //update state to capture input
    changeSupport = (event) => {
        this.setState({
            support: event.target.value
        });
    }

    //update Store with feelings rating
    sendSupport = (event) => {
        event.preventDefault();
        const support = this.state.support;
        const action = { type: 'UPDATE_SUPPORT', payload: support };
        this.props.dispatch(action);
        this.props.history.push('/Comments');
    }

    render() {
        return (
            <div>
                <div className="feedbackDiv">
                    <h3>How well are you being supported?</h3>
                    {/* <input type="text" onChange={this.changeSupport} placeholder="enter 1-5" /> */}
                    <TextField
                        id="outlined-select-rating"
                        select
                        label="1 to 5"
                        className="textField"
                        value={this.state.support}
                        onChange={this.changeSupport}
                        helperText="Enter Rating"
                        margin="normal"
                        variant="outlined"
                    >
                        <MenuItem value="1">1</MenuItem>
                        <MenuItem value="2">2</MenuItem>
                        <MenuItem value="3">3</MenuItem>
                        <MenuItem value="4">4</MenuItem>
                        <MenuItem value="5">5</MenuItem>
                    </TextField>
                    <br />
                    <br />
                    <Button variant="contained" size="small" color="primary" margin="theme.spacing.unit" className="button"  onClick={this.sendSupport}>Next</Button>
                </div>
                <br />
                <Review />
            </div >
        )
    }
}

export default connect()(Support);