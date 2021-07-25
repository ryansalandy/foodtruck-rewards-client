import React, { Component } from 'react'
// import { Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class CreateRewards extends Component {
  constructor (props) {
    super(props)

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

handlesubmit = event => {
  event.preventDefault()

  axios({
    url: `${apiUrl}/rewards`,
    method: 'POST',
    data: { reward: this.state.reward }
  })
    .then(res => this.setState({ createdRewardId: res.data.reward._id }))
    .catch(console.error)
}

render () {
  // const { handleChange, handleSubmit } = this
  // const { createdRewardId, reward } = this.state
  // //
  // if (createdRewardId) {
  //   return <Redirect to={`/rewards/${createdRewardId}`} />
  // }

  return (
    <div className="row center mb-4">
      <div className="col-sm-10 col-md-8 mx-auto mt-5">
        <h3>Create Reward</h3>
        <Form onSubmit={this.handlesubmit}>
          <Form.Group controlId="email">
            <Form.Label>Truck Name</Form.Label>
            <Form.Control
              required
              type="text"
              name="truck"
              value={this.state.truck}
              placeholder="Enter Truck Name"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              required
              name="rating"
              value={this.state.rating}
              type="number"
              placeholder="Enter Rating"
              onChange={this.handleChange}
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

export default CreateRewards
