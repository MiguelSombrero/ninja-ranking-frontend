import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Form, Row, Col } from 'react-bootstrap'
import NinjaButton from './NinjaButton'
import { registerAccount } from '../reducers/accountsReducer'
import { useTextField } from '../hooks'
import NinjaBanner from './NinjaBanner'

const RegisterForm = (props) => {
  const dispatch = useDispatch()
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
      dispatch(registerAccount({
        username: username.value,
        password: password.value,
        name: name.value
      }))

      props.history.push('/#login')

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
              <Form.Control {...name} placeholder='Name' id='registerName' />
              <Form.Control.Feedback type='invalid' >{nameErrors}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group >
              <Form.Label>Username</Form.Label>
              <Form.Control {...username} placeholder='Username' id='registerUsername' />
              <Form.Control.Feedback type='invalid' >{usernameErrors}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group >
              <Form.Label>Password</Form.Label>
              <Form.Control {...password} placeholder='Password' id='registerPassword' />
              <Form.Control.Feedback type='invalid' >{passwordErrors}</Form.Control.Feedback>
            </Form.Group>
            <NinjaButton text='Register' id='registerButton' />
          </Form>
        </Col>
      </Row>
    </>
  )
}

export default withRouter(RegisterForm)