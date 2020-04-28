import React, { useState } from 'react'
import { Modal, Form, Col } from 'react-bootstrap'
import { createResult } from '../reducers/resultsReducer'
import { updatePlayer } from '../reducers/playersReducer'
import { useDispatch } from 'react-redux'
import NinjaButton from './NinjaButton'

const ResultForm = ({ show, close, players, obstacles }) => {
  const [validated, setValidated] = useState(false)
  const [currentPlayer, setCurrentPlayer] = useState(null)
  const [time, setTime] = useState(0)
  const [passedObstacles, setPassedObstacles] = useState([])
  const dispatch = useDispatch()

  const isPassed = id => passedObstacles.includes(id)

  const handleRemovePassedObstacle = id =>
    setPassedObstacles(passedObstacles.filter(o => o !== Number(id)))

  const handleSetPassedObstacle = id =>
    setPassedObstacles([...passedObstacles, id])

  const handleTimeChange = event => {
    setTime(event.target.value)
  }

  const handlePlayerChange = event => {
    setCurrentPlayer(players.find(p => p.nickname === event.target.value))
  }

  const handleSaveResult = async (event) => {
    event.preventDefault()

    if (!event.target.checkValidity()) {
      setValidated(true)
      return
    }

    const player = currentPlayer ? currentPlayer : players[0]

    const result = {
      player_id: player.id,
      time,
      passed_obstacles: passedObstacles
    }

    try {
      const savedResult = await dispatch(createResult(result))

      const updatedPlayer = { ...player,
        results: [...player.results, savedResult]
      }

      dispatch(updatePlayer(updatedPlayer))
      setTime(0)
      setCurrentPlayer(null)
      setPassedObstacles([])
      close()

    } catch (exception) {
      console.log(exception)
    }
  }

  return (
    <Modal show={show} onHide={close} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          Add result for player
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSaveResult} >
          <Form.Group >
            <Form.Label>Select player</Form.Label>
            <Form.Row>
              <select id='players' onChange={handlePlayerChange}>
                {players.map(p =>
                  <option key={p.id}>
                    {p.nickname}
                  </option>
                )}
              </select>
            </Form.Row>
          </Form.Group>
          <Form.Group >
            <Form.Label>Time</Form.Label>
            <Form.Control type='number' onChange={handleTimeChange} placeholder='Time' />
          </Form.Group>
          <Form.Label>Select passed obstacles</Form.Label>
          {obstacles.map(o =>
            <Form.Group key={o.id}>
              <Form.Check
                type='checkbox'
                label={o.name}
                checked={isPassed(o.id)}
                onChange={() => isPassed(o.id)
                  ? handleRemovePassedObstacle(o.id)
                  : handleSetPassedObstacle(o.id)}
              />
            </Form.Group>
          )}
          <Form.Row>
            <Col>
              <NinjaButton
                text='Save result'
              />
            </Col>
            <Col>
              <NinjaButton
                text='Cancel'
                type='button'
                onClick={close}
              />
            </Col>
          </Form.Row>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default ResultForm