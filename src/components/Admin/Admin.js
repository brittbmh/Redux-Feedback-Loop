import React, {Component} from 'react';
import axios from 'axios';

class Admin extends Component {
    constructor(props){
        super(props);
        this.state = {
            feedback: []
        }
    }

    componentDidMount() {
        this.getFeedback();
    }

    getFeedback = () => {
        axios.get('/api/feedback').then((response) => {
            console.log(response);
            this.setState({
                feedback: response.data
            })
        }).catch((error) => {
            console.log('Error in GET', error);
        })
    }

    render () {
        return(
            <div>
            <p>Admin</p>
            {JSON.stringify(this.state.feedback)}}
            </div>
        )
    }
}

export default Admin;