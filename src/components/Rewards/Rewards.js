import React, { Component, Fragment } from 'react'
// import { Link } from 'react-router-dom'
// import axios from 'axios'
// import apiUrl from './../apiConfig'

import { Container, Row, Image } from 'react-bootstrap'

import sectionImage from './img/foodtruck-section-bg.jpg'
import foodtruck from './img/Foodtruck-bg.png'

class Rewards extends Component {
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
          <Row id="Trucks">
            <Image src={sectionImage} fluid />
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Rewards
