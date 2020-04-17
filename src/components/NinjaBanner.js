import React from 'react'
import { Row, Col, Jumbotron } from 'react-bootstrap'

const NinjaBanner = ({ text, type='banner' }) => {
  return (
    <Row>
      <Jumbotron as={Col}
        fluid
        className={type === 'banner' ? 'ninja-banner' : 'ninja-description'}
      >
        <h1>
          {text}
        </h1>
      </Jumbotron>
    </Row>
  )
}

export default NinjaBanner