import React from 'react'
import { Row, Col, Jumbotron } from 'react-bootstrap'

const NinjaBanner = ({ text }) => {
  return (
    <Row>
      <Jumbotron fluid as={Col} className='ninja-banner' >
        <h1>{text}</h1>
      </Jumbotron>
    </Row>
  )
}

export default NinjaBanner