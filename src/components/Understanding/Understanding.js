import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from './../Review/Review.js';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

class Understanding extends Component {
    constructor() {
        super();
        this.state = {
            understanding: 0
        }
    }

    //update state to capture input
    changeUnderstanding = (event) => {
        this.setState({
            understanding: event.target.value
        });
    }

    //update Store with feelings rating
    sendUnderstanding = (event) => {
        event.preventDefault();
        const understanding = this.state.understanding;
        const action = { type: 'UPDATE_UNDER', payload: understanding };
        this.props.dispatch(action);
        this.props.history.push('/Support');
    }

    render() {
        return (
            <div>
                <div className="feedbackDiv">
                    <h3>How well are you understanding the content?</h3>
                    <TextField
                        id="outlined-select-rating"
                        select
                        label="1 to 5"
                        className="textField"
                        value={this.state.understanding}
                        onChange={this.changeUnderstanding}
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
                    <Button variant="contained" color="primary" margin="theme.spacing.unit" className="button"  onClick={this.sendUnderstanding}>Next</Button>
                </div>
                <br />
                <Review />
            </div >
        )
    }
}

export default connect()(Understanding);