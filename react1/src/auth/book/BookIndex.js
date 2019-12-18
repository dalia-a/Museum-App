import React, { Component } from 'react';
import { index, destroy } from './api'
import { Link } from 'react-router-dom'
import { Card, CardDeck, Container, Badge } from 'react-bootstrap'

class BookIndex extends Component {
    state = {
        museumList: []
    }

    componentDidMount() {
        const user = this.props.user
        index(user)
            .then(res => {
                const museumList = res.data.museumList
                console.log(res.data.museumList[0].museum)
                this.setState({
                    museumList: museumList
                })
            })
            .catch(error => console.log(error))
    }
    destroy = (museumId) => {
        const user = this.props.user
        const newArray = this.state.museumList[0].museum
        // to delete the video by find its id
        newArray.splice(newArray.findIndex((museum) => {
            return museum._id === museumId;
        }), 1);
        // send the new array to the req
        destroy(user, newArray)
            .then(() => alert('Deleted'))

            .catch(error => console.log(error))
    }

    render() {
        console.log('Book index', this.state.museumList)
        return (
            <React.Fragment>
                <br />
                <h2>My Book</h2>
                <br />
                <Container>
                    <CardDeck className='card-deck'>
                        {this.state.museumList.map((list, index) => (
                            <React.Fragment key={index}>
                                {list.museum.map((museum, index) =>
                                    <div key={index}>
                                        <Card className="cards">
                                            <Card.Body>
                                                <Card.Title>{museum.name}</Card.Title>
                                <Card.Subtitle>{museum.workTime}</Card.Subtitle>
                                                <Link to={`/museumList/${museum._id}`}>Go to the video </Link>
                                                <Link to='/museumList/' onClick={() => { if (window.confirm('Are you sure you wish to delete this book?')) this.destroy(museum._id) }}> Delete</Link>
                                            </Card.Body>
                                        </Card>
                                        <br />
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </CardDeck>
                </Container>
            </React.Fragment>
        );
    }
}

export default BookIndex;