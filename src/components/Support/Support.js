import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from './../Review/Review.js';
import Rating from './../Rating/Rating.js';
import Button from '@material-ui/core/Button';


class Support extends Component {
    constructor() {
        super();
        this.state = {
            support: 0
        }
    }

    //update state to capture input
    changeSupport = (rating) => {
        this.setState({
            support: rating
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
            <div>
                <div className="feedbackDiv">
                    <h3>How well are you being supported?</h3>
                    {/* <input type="text" onChange={this.changeSupport} placeholder="enter 1-5" /> */}
                    <Rating send={this.changeSupport} />
                    <br />
                    <br />
                    <Button variant="contained" size="small" color="primary" margin="theme.spacing.unit" className="button"  onClick={this.sendSupport}>Next</Button>
                </div>
                <br />
                <Review />
            </div >
        )
    }
}

export default connect()(Support);