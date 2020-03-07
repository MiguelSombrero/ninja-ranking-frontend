import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import { useTextField } from '../hooks'
import { createObstacle } from '../reducers/obstaclesReducer'
import NinjaButton from './NinjaButton'

const ObstacleForm = (props) => {
  const [validated, setValidated] = useState(false)
  const [name, nameErrors, setName] = useTextField('text', 1, 20, true)

  const handleCreateObstacle = async (event) => {
    event.preventDefault()

    if (!event.target.checkValidity()) {
      setValidated(true)
      return
    }

    try {
      await props.createObstacle({
        name: name.value,
        tournament_id: props.tournament.id
      })

      setName('')

    } catch (exception) {
      console.log('Creation of a obstacle failed', exception)
    }
  }

  return (
    <Form noValidate validated={validated} onSubmit={handleCreateObstacle} >
      <Form.Group >
        <Form.Label>Obstacle name</Form.Label>
        <Form.Control {...name} placeholder='Name' />
        <Form.Control.Feedback type='invalid' >{nameErrors}</Form.Control.Feedback>
      </Form.Group>
      <NinjaButton text='New obstacle' />
    </Form>
  )
}

const mapDispatchToProps = {
  createObstacle
}

export default connect(null, mapDispatchToProps)(withRouter(ObstacleForm))