import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Form, Row, Col } from 'react-bootstrap'
import { useTextField } from '../hooks'
import { createTournament } from '../reducers/tournamentsReducer'
import NinjaButton from './NinjaButton'
import NinjaBanner from './NinjaBanner'

const TournamentForm = (props) => {
  const [validated, setValidated] = useState(false)
  const [name, nameErrors] = useTextField('text', 1, 50, true)

  const handleCreateTournament = async (event) => {
    event.preventDefault()

    if (!event.target.checkValidity()) {
      setValidated(true)
      return
    }

    try {
      await props.createTournament({ name: name.value })
      props.history.push('/tournaments')

    } catch (exception) {
      console.log('Creation of a tournament failed', exception)
    }
  }

  return (
    <>
      <NinjaBanner
        text='Create Ninja Tournament'
      />
      <Row>
        <Col className='form'>
          <Form noValidate validated={validated} onSubmit={handleCreateTournament} >
            <Form.Group >
              <Form.Label>Name</Form.Label>
              <Form.Control {...name} placeholder='Name' />
              <Form.Control.Feedback type='invalid' >{nameErrors}</Form.Control.Feedback>
            </Form.Group>
            <NinjaButton text='Create tournament' />
          </Form>
        </Col>
      </Row>
    </>
  )
}

const mapDispatchToProps = {
  createTournament
}

export default connect(null, mapDispatchToProps)(withRouter(TournamentForm))