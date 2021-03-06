import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Review.css';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import Button from '@material-ui/core/Button';

class Review extends Component {
    //send Feedback to database and move to Success page
    postFeedback = (event) => {
        const feedback = this.props.reduxStore.feedbackReview;
        console.log(feedback);
        event.preventDefault();
        axios.post('/api/feedback', feedback)
            .then((response) => {
                console.log(response);
                const action = { type: 'CLEAR_FEEDBACK' };
                this.props.dispatch(action);
                this.props.history.push('/Success');
            }).catch((error) => {
                console.log(error);
            })
    }

    // display current ratings entered at bottom of input pages
    render() {
        let buttonSwitch;
        if (this.props.location.pathname === '/FinalReview'){
            buttonSwitch = <Button variant="contained" color="primary" margin="theme.spacing.unit" className="button" onClick={this.postFeedback}>Submit</Button>
        } else {
            buttonSwitch = <Button variant="contained" color="secondary" disabled margin="theme.spacing.unit" className="button" onClick={this.postFeedback}>Incomplete</Button>
        };
        
        const feedback = this.props.reduxStore.feedbackReview;
        return (
            <div className="review">
                <h3>Review Your Feedback</h3>
                <p>Feelings: {feedback.Feelings} </p>
                <p>Understanding: {feedback.Understanding}</p>
                <p>Support: {feedback.Support}</p>
                <p>Comments: {feedback.Comments}</p>
                {buttonSwitch}
            </div>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
})

export default withRouter(connect(mapReduxStoreToProps)(Review));