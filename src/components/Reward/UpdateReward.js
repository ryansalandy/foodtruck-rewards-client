import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { withRouter } from 'react-router'
import { updateReward } from '../../api/reward'
import messages from '../AutoDismissAlert/messages'
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
    const { match } = this.props
    updateReward(match.params.id, this.props.user, this.state.reward)
      .then(res => this.setState({ reward: res.data.reward }))
      .catch(console.error)
  }

  handleChange = (event) => {
    const updatedField = { [event.target.name]: event.target.value }
    const editedReward = Object.assign(this.state.reward, updatedField)
    this.setState({ reward: editedReward })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { match } = this.props
    updateReward(match.params.id, this.props.user, this.state.reward)
      .then(() => this.setState({ updated: true }))
      .then(() => this.props.msgAlert({
        heading: 'Success',
        message: messages.updateSuccess,
        variant: 'success'
      }))
      .catch(() => this.props.msgAlert({
        heading: 'Failure',
        message: messages.updateFailure,
        variant: 'danger'
      }))
      .catch(console.error)
  }
  render () {
    const { updated, reward } = this.state
    const { handleChange, handleSubmit } = this

    console.log('made it to update')
    if (updated) {
      return <Redirect to={'/index-reward'} />
    }

    return (
      <div className="row center">
        <div className="col-sm-10 col-md-8 col-lg-6">
          <h3>Update Reward</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email">
              <Form.Label>Truck Name</Form.Label>
              <Form.Control
                required
                type="text"
                name="truck"
                value={reward}
                placeholder="Enter Truck Name"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                required
                name="rating"
                value={reward}
                type="number"
                placeholder="Enter Rating"
                onChange={handleChange}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
            >
              Update Reward
            </Button>
          </Form>
        </div>
      </div>
    )
  }
}

export default withRouter(UpdateReward)
