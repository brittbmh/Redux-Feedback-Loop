import React, { Component } from 'react';
import Review from './../Review/Review.js';

class FinalReview extends Component {
    render() {
        return (
            <div>
                <h2>Please review your answers and click submit.</h2>
                <Review />
            </div>
        )
    }
}

export default FinalReview;