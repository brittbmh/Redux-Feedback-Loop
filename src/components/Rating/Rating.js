import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

class Rating extends Component {
    constructor() {
        super();
        this.state = {
            rating: 0
        }
    }

    //update state to capture input
    changeRating = (event) => {
        this.setState({
            rating: event.target.value
        });
    }

    //update Store with feelings rating
    sendRating = (event) => {
        event.preventDefault();
        const rating = this.state.rating;
        this.props.send(rating);
    }

    render() {
        return (
            <div>
                {/* <input type="text" onChange={this.changeFeelings} placeholder="enter 1-5" /> */}
                <TextField
                    id="outlined-select-rating"
                    select
                    label="1 to 5"
                    className="textField"
                    value={this.state.rating}
                    onChange={this.changeRating}
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
            </div>
        )
    }
}

export default connect()(Rating);