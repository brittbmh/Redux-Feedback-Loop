import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from './../Review/Review.js';
import Button from '@material-ui/core/Button';

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
        const action = { type: 'UPDATE_COMMENT', payload: comments };
        this.props.dispatch(action);
        this.props.history.push('/FinalReview');
    }

    render() {
        return (
            <div>
                <div className="feedbackDiv">
                    <h3>Any additional comments?</h3>
                    <br />
                    <input type="text" onChange={this.changeComments} placeholder="enter comment" />
                    <br />
                    <br />
                    <Button variant="contained" size="small" color="primary" margin="theme.spacing.unit" className="button" onClick={this.sendComments}>Next</Button>
                </div>
                <br />
                <Review />
            </div >
        )
    }
}

export default connect()(Comments);