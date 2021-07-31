import React, { Component, Fragment } from 'react'

import { Container, Row, Image } from 'react-bootstrap'

import sectionImage from './img/owners.png'
import foodtruck from './img/Foodtruck-bg.png'

class Home extends Component {
  constructor () {
    super()
    this.state = {
      rewards: ''
    }
  }

  render () {
    return (
      <Fragment>
        <Container fluid>
          <Row>
            <div className="img-wrapper">
              <Image className="img-responsive" src={foodtruck} fluid />
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

export default Home
