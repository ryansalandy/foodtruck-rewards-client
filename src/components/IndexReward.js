import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { readReward } from '../api/reward'
import messages from './AutoDismissAlert/messages'
import { Card, Container, Row } from 'react-bootstrap'

class IndexReward extends Component {
  constructor (props) {
    super(props)

    this.state = {
      rewards: []
    }
  }

  componentDidMount () {
    readReward(this.props.user)
      .then(res => this.setState({ rewards: res.data.rewards }))
      .then(() => this.props.msgAlert({
        heading: 'Read Success',
        message: messages.updateSuccess,
        variant: 'success'
      }))
      .catch(console.error)
  }
  render () {
    const rewards = this.state.rewards.map(reward => (
      <Card style={{ width: '18rem', margin: '8px' }} key={reward.id}>
        <Card.Body>
          <Card.Title>{reward.truck}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Truck rating: {reward.rating}</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the cards content.
          </Card.Text>
          <Card.Link href="#">Update</Card.Link>
          <Card.Link href="#">Delete</Card.Link>
        </Card.Body>
      </Card>
    ))

    return (
      <div>
        <Container className="container-fluid no-padding" style={{ margin: 'auto' }} fluid>
          <Row className="justify-content-start center">
            {rewards}
          </Row>
        </Container>
      </div>
    )
  }
}

export default IndexReward
