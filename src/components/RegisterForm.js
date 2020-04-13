import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Form, Row, Col } from 'react-bootstrap'
import NinjaButton from './NinjaButton'
import { registerAccount } from '../reducers/accountsReducer'
import { useTextField } from '../hooks'
import NinjaBanner from './NinjaBanner'

const RegisterForm = (props) => {
  const [validated, setValidated] = useState(false)
  const [username, usernameErrors] = useTextField('text', 5, 20, true)
  const [password, passwordErrors] = useTextField('password', 5, 20, true)
  const [name, nameErrors] = useTextField('text', 1, 20, true)

  const handleRegister = async (event) => {
    event.preventDefault()

    if (!event.target.checkValidity()) {
      setValidated(true)
      return
    }

    try {
      await props.registerAccount({
        username: username.value,
        password: password.value,
        name: name.value
      })

      props.history.push('/login')

    } catch (exception) {
      console.log('Oooops from register form', exception)
    }
  }

  return (
    <>
      <NinjaBanner
        text='Create new Ninja Account'
      />
      <Row>
        <Col className='form'>
          <Form noValidate validated={validated} onSubmit={handleRegister} >
            <Form.Group >
              <Form.Label>Name</Form.Label>
              <Form.Control {...name} placeholder='Name' />
              <Form.Control.Feedback type='invalid' >{nameErrors}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group >
              <Form.Label>Username</Form.Label>
              <Form.Control {...username} placeholder='Username' />
              <Form.Control.Feedback type='invalid' >{usernameErrors}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group >
              <Form.Label>Password</Form.Label>
              <Form.Control {...password} placeholder='Password' />
              <Form.Control.Feedback type='invalid' >{passwordErrors}</Form.Control.Feedback>
            </Form.Group>
            <NinjaButton text='Register' />
          </Form>
        </Col>
      </Row>
    </>
  )
}

const mapDispatchToProps = {
  registerAccount
}

export default connect(null, mapDispatchToProps)(withRouter(RegisterForm))