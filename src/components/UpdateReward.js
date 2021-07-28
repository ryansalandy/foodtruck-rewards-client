import React, { Component, Redirect } from 'react'
import { updateReward } from '../api/reward'
import messages from './AutoDismissAlert/messages'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class UpdateReward extends Component {
  constructor (props) {
    super(props)

    this.state = {
      reward: {
        truck: '',
        rating: ''
      },
      updated: false
    }
  }

  componentDidMount () {
    updateReward(this.props.id, this.props.user, this.state.reward)
      .then(res => this.setState({ reward: res.data.reward }))
      .catch(console.error)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    updateReward(this.props.params.id, this.props.user, this.state.reward)
      .then(() => this.setState({ updated: true }))
      .then(() => this.props.msgAlert({
        heading: 'Update Success',
        message: messages.updateSuccess,
        variant: 'Success'
      }))
      .catch(console.error)
  }
  render () {
    const { reward, updated } = this.state
    const { handleChange, handleSubmit } = this

    if (updated) {
      return <Redirect to={`/rewards/${this.props.match.params.id}`} />
    }
    return (
      <div className="row center mb-4">
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
          <h3>Update Reward</h3>
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
              Submit Update
            </Button>
          </Form>
        </div>
      </div>
    )
  }
}

export default UpdateReward
