import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useTextField } from '../hooks'
import NinjaButton from './NinjaButton'

const PlayerForm = (props) => {
  const [validated, setValidated] = useState(false)
  const [nickname, nicknameErrors, setNickname] = useTextField('text', 1, 50, true)

  const handleCreatePlayer = async (event) => {
    event.preventDefault()

    if (!event.target.checkValidity()) {
      setValidated(true)
      return
    }

    try {
      await props.createPlayer({
        nickname: nickname.value,
        tournament_id: props.tournament.id
      })

      setNickname('')

    } catch (exception) {
      console.log('Creation of a player failed', exception)
    }
  }

  return (
    <Form noValidate validated={validated} onSubmit={handleCreatePlayer} >
      <Form.Group >
        <Form.Label>Player name</Form.Label>
        <Form.Control {...nickname} placeholder='Name' />
        <Form.Control.Feedback type='invalid' >{nicknameErrors}</Form.Control.Feedback>
      </Form.Group>
      <NinjaButton text='New player' />
    </Form>
  )
}

export default PlayerForm