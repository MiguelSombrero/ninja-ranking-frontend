import React from 'react'
import { Row, Col, Jumbotron, Container } from 'react-bootstrap'
import LoginForm from './LoginForm'

const FrontPage = (props) => {

  return (
    <Container fluid>
      <Row>
        <Jumbotron as={Col} >
          Ninja Ranking 2020
        </Jumbotron>
      </Row>

      {!props.user &&
      <>
        <Row>
          <Col>
            <LoginForm />
          </Col>
        </Row>
      </>
      }

      {props.user &&
      <>
        <Row>
          <Col className='text-center'>
            <h2>Recent posts</h2>
          </Col>
        </Row>
      </>
      }
    </Container>
  )
}

export default FrontPage