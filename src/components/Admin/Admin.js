import React, { Component } from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

class Admin extends Component {
    constructor(props) {
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

    rowDelete = (event) => {
        console.log(event);
        axios.delete(`/api/feedback/${event}`).then((response) => {
            this.getFeedback();
        }).catch((error) => {
            console.log(error);
        })
    }

    render() {

        return (
            <div>
                <h2>Admin</h2>
                <p>Click row to delete feedback</p>
                <Paper className="root">
                    <Table className="table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Feelings</TableCell>
                                <TableCell align="center">Understanding</TableCell>
                                <TableCell align="center">Support</TableCell>
                                <TableCell align="center">Comments</TableCell>
                                <TableCell align="center">Date</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.feedback.map(row => (
                                <TableRow key={row.id} onClick={event => this.rowDelete(row.id)} data-id={row.id}>
                                    <TableCell align="center">{row.feeling}</TableCell>
                                    <TableCell align="center">{row.understanding}</TableCell>
                                    <TableCell align="center">{row.support}</TableCell>
                                    <TableCell align="center">{row.comments}</TableCell>
                                    <TableCell align="center">{row.date}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        )
    }
}



export default withStyles(styles)(Admin);