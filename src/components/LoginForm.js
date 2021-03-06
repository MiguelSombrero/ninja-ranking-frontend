import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Form, Col } from 'react-bootstrap'
import { loginUser } from '../reducers/loginReducer'
import { useTextField } from '../hooks'
import NinjaButton from './NinjaButton'

const LoginForm = (props) => {
  const dispatch = useDispatch()
  const [validated, setValidated] = useState(false)
  const [username, usernameErrors] = useTextField('text', 5, 20, true)
  const [password, passwordErrors] = useTextField('password', 5, 20, true)

  const handleLogin = async (event) => {
    event.preventDefault()

    if (!event.target.checkValidity()) {
      setValidated(true)
      return
    }

    try {
      dispatch(loginUser({
        username: username.value,
        password: password.value
      }))

      props.history.push('/')

    } catch (exception) {
      console.log('Login failed', exception)
    }
  }

  return (
    <Form id='loginform' noValidate validated={validated} onSubmit={handleLogin} >
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
      <NinjaButton text='Login' />
      <Form.Row className='mt-2'>
        <Col xs={12} md={6} >
          <small className='float-left'>
            <Link to='/register'> Not yet a member?</Link>
          </small>
        </Col>
        <Col xs={12} md={6}>
          <small className='float-right'>
            <Link to='/register'> Forgot your password?</Link>
          </small>
        </Col>
      </Form.Row>
    </Form>
  )
}

export default withRouter(LoginForm)