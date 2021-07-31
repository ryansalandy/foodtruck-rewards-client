import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { indexReward } from '../../api/reward'
import messages from '../AutoDismissAlert/messages'
import { Card, Container, Row, Button, ProgressBar } from 'react-bootstrap'

class IndexReward extends Component {
  constructor (props) {
    super(props)

    this.state = {
      rewards: []
    }
  }

  componentDidMount () {
    indexReward(this.props.user)
      .then(res => this.setState({ rewards: res.data.rewards }))
      .then(() => this.props.msgAlert({
        heading: 'Success',
        message: messages.readSuccess,
        variant: 'success'
      }))
      .catch(console.error)
  }

  render () {
    const rewards = this.state.rewards.map(reward => (
      <Card key={reward.id} style={{ width: '18rem', margin: '8px' }}>
        <Card.Body>
          <Card.Title>{reward.truck}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Truck rating: {reward.rating}</Card.Subtitle>
          <Card.Text>
            This is where reward information will go (ie. Digit Reward Points)
          </Card.Text>
          <ProgressBar animated now={45} />
          <Link to={`/show-reward/${reward._id}`}><Button className="button mt-2" variant="secondary" size="sm">
            Show Reward
          </Button></Link>
        </Card.Body>
      </Card>
    ))

    return (
      <Fragment>
        <Container className="container-fluid mt-5 mb-5 center" style={{ margin: 'auto' }} fluid>
          <Row className="justify-content-start">
            {rewards}
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default IndexReward
