import React, { Component, Fragment } from 'react'

// import axios from 'axios'
// import apiUrl from './../apiConfig'

import { Container, Row, Col, Image } from 'react-bootstrap'

import leftImage from './img/leftImage.jpg'
// import grocery2 from './img/grocery2.jpg'

class Rewards extends Component {
  constructor () {
    super()
    this.state = {
      rewards: null
    }
  }

  // componentDidMount () {
  //   axios(apiUrl + '/reward')
  //     .then(console.log)
  //     .catch(console.err)
  // }

  render () {
    return (
      <Fragment>
        <Container style={{ padding: 0 }} fluid>
          <Row>
            <Col lg={6}>
              <Image src={leftImage} fluid />
            </Col>
            <Col lg={6}>
              <h1>This col. for rewardCard component five checkboxes. Need logic similar to tic tac toe. and figure out how to expand full screen</h1>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Rewards
