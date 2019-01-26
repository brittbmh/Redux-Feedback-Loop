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
            <div className="feedbackDiv">
                <h3>How well are you being supported?</h3>
                <br />
                <input type="text" onChange={this.changeSupport} placeholder="enter 1-5" />
                <button onClick={this.sendSupport}>Next</button>
            </div>
        )
    }
}

export default connect()(Support);