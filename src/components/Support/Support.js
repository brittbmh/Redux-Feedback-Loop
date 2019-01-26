import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {
    constructor() {
        super();
        this.state = {
            understanding: 0
        }
    }

    //update state to capture input
    changeFeelings = (event) => {
        this.setState({
            support: event.target.value
        });
    }

    //update Store with feelings rating
    sendFeelings = (event) => {
        event.preventDefault();
        const support = this.state.support;
        const action = { type: 'UPDATE_SUPPORT', payload: support };
        this.props.dispatch(action);
        this.props.history.push('/Comment');
    }

    render() {
        return (
            <div className="feedbackDiv">
                <h4>Are you feeling supported?</h4>
                <br />
                <input type="text" onChange={this.changeFeelings} placeholder="enter 1-5" />
                <button onClick={this.sendFeelings}>Next</button>
            </div>
        )
    }
}

export default connect()(Support);