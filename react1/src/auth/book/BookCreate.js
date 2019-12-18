import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import { update } from './api'


class BookCreate extends Component {

    addToList = () => {
        // const newList = this.props.video
        const user = this.props.user
        update(user, this.props.museumId)

            .then(() => alert('Added to your list'))
            .catch((error) => console.log(error))
    }
    render() {
        return (
            <Button variant="dark" onClick={this.addToList}>Add to list</Button>
        );
    }
}

export default BookCreate;