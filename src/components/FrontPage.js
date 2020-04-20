import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import LoginForm from './LoginForm'
import NinjaBanner from './NinjaBanner'

const FrontPage = ({ user }) => {

  return (
    <>
      <Image fluid
        src='/ninja_ranking_banner.jpg'
        style={{ width: '100%', height: 'auto' }}
      />

      {!user &&
        <>
          <LoginForm />
        </>
      }

      {user &&
        <>
          <Row>
            <Col className='text-center'>
              <NinjaBanner
                text={`Welcome back ${user.name}!`}
                type='description'
              />
            </Col>
          </Row>
        </>
      }
    </>
  )
}

export default FrontPage