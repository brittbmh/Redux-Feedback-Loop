import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Review.css'; 

class Review extends Component {
    // display current ratings entered at bottom of input pages
    render() {
        const feedback = this.props.reduxStore.feedbackReview;
        return (
            <div className="review">
                <h3>Review Your Feedback</h3>
                <p>Feelings: {feedback.Feelings} </p>
                <p>Understanding: {feedback.Understanding}</p>
                <p>Support: {feedback.Support}</p>
                <p>Comment: {feedback.Comment}</p>
            </div>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapReduxStoreToProps)(Review);