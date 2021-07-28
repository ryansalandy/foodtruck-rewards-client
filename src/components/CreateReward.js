import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { createReward } from '../api/reward'
// import apiUrl from '../apiConfig'
import messages from './AutoDismissAlert/messages'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class CreateReward extends Component {
  constructor () {
    super()

    this.state = {
      reward: {
        truck: '',
        rating: ''
      },
      createdRewardId: null
    }
  }

handleChange = event => {
  const updatedField = { [event.target.name]: event.target.value }

  const editedReward = Object.assign(this.state.reward, updatedField)

  this.setState({ reward: editedReward })
}

handleSubmit = event => {
  event.preventDefault()

  createReward(this.props.user, this.state.reward)
    .then(res => this.setState({ createdRewardId: res.data.reward._id }))
    .then(() => this.props.msgAlert({
      heading: 'Created Reward',
      message: messages.updateSuccess,
      variant: 'success'
    }))
    .catch(console.error)
}

render () {
  const { handleChange, handleSubmit } = this
  const { reward, createdRewardId } = this.state

  if (createdRewardId) {
    return <Redirect to={`/rewards/${createdRewardId}`} />
  }

  return (
    <div className="row center mb-4">
      <div className="col-sm-10 col-md-8 mx-auto mt-5">
        <h3>Create Reward</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="email">
            <Form.Label>Truck Name</Form.Label>
            <Form.Control
              required
              type="text"
              name="truck"
              value={reward.truck}
              placeholder="Enter Truck Name"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              required
              name="rating"
              value={reward.rating}
              type="number"
              placeholder="Enter Rating"
              onChange={handleChange}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
          >
            Submit Reward
          </Button>
        </Form>
      </div>
    </div>
  )
}
}

export default CreateReward
