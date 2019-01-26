import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {
    constructor() {
        super();
        this.state = {
            comments: ''
        }
    }

    //update state to capture input
    changeComments = (event) => {
        this.setState({
            comments: event.target.value
        });
    }

    //update Store with feelings rating
    sendComments = (event) => {
        event.preventDefault();
        const comments = this.state.comments;
        const action = { type: 'UPDATE_FEELINGS', payload: comments };
        this.props.dispatch(action);
        this.props.history.push('/FinalReview');
    }

    render() {
        return (
            <div className="feedbackDiv">
                <h3>Any additional comments?</h3>
                <br />
                <input type="text" onChange={this.changeComments} placeholder="enter comment" />
                <button onClick={this.sendComments}>Next</button>
            </div>
        )
    }
}

export default connect()(Comments);