import React from 'react'
import { Card } from 'react-bootstrap'

const Tournament = ({ tournament }) => {

  return (
    <Card>
      <Card.Header>
        <Card.Title>{tournament.name}</Card.Title>
        <Card.Subtitle>{tournament.created}</Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          lisätietoja
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Tournament