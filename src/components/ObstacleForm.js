import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import { useTextField } from '../hooks'
import { createObstacle } from '../reducers/obstaclesReducer'
import { updateTournamentState } from '../reducers/tournamentsReducer'
import NinjaButton from './NinjaButton'

const ObstacleForm = ({ tournament }) => {
  const dispatch = useDispatch()
  const [validated, setValidated] = useState(false)
  const [name, nameErrors, setName] = useTextField('text', 1, 20, true)

  const handleCreateObstacle = async (event) => {
    event.preventDefault()

    if (!event.target.checkValidity()) {
      setValidated(true)
      return
    }

    try {
      const savedObstacle = await dispatch(createObstacle({
        name: name.value,
        tournament_id: tournament.id
      }))

      const updatedTournament = {
        ...tournament,
        obstacles: [...tournament.obstacles, savedObstacle]
      }

      dispatch(updateTournamentState(updatedTournament))
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

export default withRouter(ObstacleForm)