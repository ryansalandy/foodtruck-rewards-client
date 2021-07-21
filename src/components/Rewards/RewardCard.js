import React, { Component, Fragment } from 'react'
import { Container, Row, Card, ListGroup, ListGroupItem } from 'react-bootstrap'

class RewardCard extends Component {
  constructor () {
    super()
    this.state = {
      rewards: null
    }
  }

  render () {
    return (
      <Fragment>
        <Container fluid>
          <Row xs={1} md={2} className="g-4">
            <Card style={{ width: '18rem' }} className="mt-5 mb-5">
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default RewardCard
