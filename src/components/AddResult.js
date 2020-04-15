import React, { useState } from 'react'
import { Modal, Form, Col } from 'react-bootstrap'
import { createResult } from '../reducers/resultsReducer'
import { useDispatch } from 'react-redux'
import NinjaButton from './NinjaButton'

const AddResult = ({ show, close, player, obstacles }) => {
  const dispatch = useDispatch()
  const [validated, setValidated] = useState(false)
  const [time, setTime] = useState(0)
  const [passedObstacles, setPassedObstacles] = useState([])

  if (!player) {
    return null
  }

  const isPassed = id => passedObstacles.includes(id)

  const handleRemovePassedObstacle = id =>
    setPassedObstacles(passedObstacles.filter(o => o !== Number(id)))

  const handleSetPassedObstacle = id =>
    setPassedObstacles([...passedObstacles, id])

  const handleChangeTime = event => {
    setTime(event.target.value)
  }

  const handleSaveResult = async (event) => {
    event.preventDefault()

    if (!event.target.checkValidity()) {
      setValidated(true)
      return
    }

    const result = {
      player_id: player.id,
      time,
      passed_obstacles: passedObstacles
    }

    try {
      dispatch(createResult(result))
      close()

    } catch (exception) {
      console.log(exception)
    }
  }

  return (
    <Modal show={show} onHide={close} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          Add result for player {player.nickname}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSaveResult} >
          <Form.Group >
            <Form.Label>Time</Form.Label>
            <Form.Control type='number' onChange={handleChangeTime} placeholder='Time' />
          </Form.Group>
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

export default AddResult