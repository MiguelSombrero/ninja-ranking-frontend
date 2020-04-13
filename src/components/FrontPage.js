import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import LoginForm from './LoginForm'
import NinjaBanner from './NinjaBanner'

const FrontPage = (props) => {

  return (
    <>
      <Image
        src='/ninja_ranking_banner.jpg'
        style={{ width: '100%', height: 'auto' }}
      />

      {!props.user &&
        <>
          <NinjaBanner
            text='Login Ninja!'
          />
          <LoginForm />
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
    </>
  )
}

export default FrontPage