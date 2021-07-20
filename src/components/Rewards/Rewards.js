import React, { Component, Fragment } from 'react'

// import axios from 'axios'
// import apiUrl from './../apiConfig'

import { Container, Row, Image, Button } from 'react-bootstrap'

import sectionImage from './img/foodtruck-section-bg.jpg'
import foodtruck from './img/Foodtruck-bg.png'

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
        <Container fluid>
          <Row>
            <div className="img-wrapper">
              <Image className="img-responsive" src={foodtruck} fluid />
              <div className="img-overlay">
                <Button variant="primary" size="lg">Start Your Rewards!</Button>{' '}
              </div>
            </div>
          </Row>
          <Row>
            <Image src={sectionImage} fluid />
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Rewards
