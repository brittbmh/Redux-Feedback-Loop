import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {
    constructor() {
        super();
        this.state = {
            understanding: 0
        }
    }

    //update state to capture input
    changeFeelings = (event) => {
        this.setState({
            understanding: event.target.value
        });
    }

    //update Store with feelings rating
    sendFeelings = (event) => {
        event.preventDefault();
        const understanding = this.state.understanding;
        const action = { type: 'UPDATE_UNDER', payload: understanding };
        this.props.dispatch(action);
        this.props.history.push('/Support');
    }

    render() {
        return (
            <div className="feedbackDiv">
                <h4>How well are you understanding the content?</h4>
                <br />
                <input type="text" onChange={this.changeFeelings} placeholder="enter 1-5" />
                <button onClick={this.sendFeelings}>Next</button>
            </div>
        )
    }
}

export default connect()(Understanding);