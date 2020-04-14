import React, { useState } from 'react'
import { Modal, Form } from 'react-bootstrap'
import NinjaButton from './NinjaButton'

const AddResult = ({ show, close, player, obstacles }) => {
  const [validated, setValidated] = useState(false)
  const [time, setTime] = useState(0)

  if (!player) {
    return null
  }

  const handleChangeTime = event => {
    setTime(event.target.value)
  }

  const handleSaveResult = async () => {
    event.preventDefault()

    if (!event.target.checkValidity()) {
      setValidated(true)
      return
    }

    const result = {
      player_id: player.id,
      time,
      passed_obstacles: []
    }

    try {
      console.log(result)
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
        <Form noValidate validated={validated} onClick={handleSaveResult} >
          <Form.Group >
            <Form.Label>Time</Form.Label>
            <Form.Control type='number' onChange={handleChangeTime} placeholder='Time' />
          </Form.Group>
          <NinjaButton
            text='Save result'
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <NinjaButton
          text='Cancel'
          onClick={close}
        />
      </Modal.Footer>
    </Modal>
  )
}

export default AddResult