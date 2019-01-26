import React, {Component} from 'react';
import { connect } from 'react-redux';

class Feelings extends Component {
    constructor(){
        super();
        this.state = {
            feelings: 0
        }
    }

    changeFeelings = (event) => {
        this.setState({
            feelings: event.target.value
        });
    }

    sendFeelings = (event) => {
        event.preventDefault();
        const feelings = this.state.feelings;
        const action = { type: 'UPDATE_FEELINGS', payload: feelings };
        this.props.dispatch(action);
        this.props.history.push('/Understanding');
    }

    render () {
        return (
            <div className="feedbackDiv">
                <h4>How are you feeling today?</h4>
                <br />
                <input type="text" onChange={this.changeFeelings} placeholder="1-5"/>
                <button onClick={this.sendFeelings}>Next</button>
            </div>
        )
    }
}

export default connect()(Feelings);