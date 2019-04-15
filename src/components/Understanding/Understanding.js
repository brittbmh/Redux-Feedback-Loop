import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from './../Review/Review.js';
import Rating from './../Rating/Rating.js';
import Button from '@material-ui/core/Button';

class Understanding extends Component {
    constructor() {
        super();
        this.state = {
            understanding: 0
        }
    }

    //update state to capture input
    changeUnderstanding = (rating) => {
        this.setState({
            understanding: rating
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
                    <Rating send={this.changeUnderstanding} />
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