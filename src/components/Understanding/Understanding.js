import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from './../Review/Review.js';

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
                    <br />
                    <input type="text" onChange={this.changeUnderstanding} placeholder="enter 1-5" />
                    <button onClick={this.sendUnderstanding}>Next</button>
                </div>
                <br />
                <Review />
            </div >
        )
    }
}

export default connect()(Understanding);