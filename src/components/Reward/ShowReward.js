import React, { Component, Fragment } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { showReward, deleteReward } from '../../api/reward'
import { Container, Button, Row, Card, ProgressBar } from 'react-bootstrap'

class ShowReward extends Component {
  constructor (props) {
    super(props)

    this.state = {
      reward: null,
      deleted: false
    }
  }

  componentDidMount () {
    console.log(this.props)
    const { match } = this.props
    showReward(match.params.id, this.props.user)
      .then(res => this.setState({ reward: res.data.reward }))
      .catch(console.error)
  }

  destroy = () => {
    const { match } = this.props
    deleteReward(match.params.id, this.props.user)
      .then(() => this.setState({ deleted: true }))
      .catch(console.error)
  }

  render () {
    const { reward, deleted } = this.state
    if (!reward) {
      return <p>Loading...</p>
    }

    if (deleted) {
      return <Redirect to={'/index-reward'} />
    }
    return (
      <Fragment>
        <Container className="container-fluid mt-5 mb-5 center" style={{ margin: 'auto' }} fluid>
          <Row className="justify-content-start">
            <div key={reward.id}>
              <Card style={{ width: '18rem', margin: '8px' }}>
                <Card.Body>
                  <Card.Title>{reward.truck}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Truck rating: {reward.rating}</Card.Subtitle>
                  <Card.Text>
                    <p>This is where reward information will go (ie. Digit Reward Points)</p>
                    <ProgressBar animated now={45} />
                  </Card.Text>
                  <Link className="button-link" to={`/posts/${this.props.match.params.id}/edit`}><Button className="edit-button" variant="secondary" size="sm" >UPDATE</Button></Link>
                  <Button className="delete-button button" size="sm" onClick={this.destroy}>DELETE</Button>
                </Card.Body>
              </Card>
            </div>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default withRouter(ShowReward)
