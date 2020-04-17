import React from 'react'
import { Row, Col, ListGroup } from 'react-bootstrap'
import NavigationSidePanel from './NavigationSidePanel'
import NinjaBanner from './NinjaBanner'
import Results from './Results'

const Tournament = ({ tournament, players, addResult }) => {
  if (!tournament) {
    return null
  }

  const renderObstacles = tournament.obstacles.length === 0
    ? () => 'no obstacles'
    : () => tournament.obstacles.map(t =>
      <ListGroup.Item key={t.id} >
        {t.name}
      </ListGroup.Item>
    )

  const renderPlayers = players.length === 0
    ? () => 'no players'
    : () => players.map(p =>
      <ListGroup.Item key={p.id} onClick={() => addResult(p)}>
        {p.nickname}
      </ListGroup.Item>
    )

  return (
    <>
      <NinjaBanner
        text={tournament.name}
      />
      <Row>
        <Col xs={12} sm={{ span: 3, offset: 1 }} >
          <NavigationSidePanel
            tournament={tournament}
          />
        </Col>
        <Col xs={12} sm={{ span: 3, offset: 1 }} >
          <h4>Obstacles</h4>

          <ListGroup variant='flush'>
            {renderObstacles()}
          </ListGroup>
        </Col>
        <Col xs={12} sm={{ span: 3, offset: 1 }} >
          <h4>Players</h4>

          <ListGroup variant='flush'>
            {renderPlayers()}
          </ListGroup>
        </Col>
      </Row>
      <NinjaBanner
        text='Results'
        type='description'
      />
      <Results
        obstacles={tournament.obstacles}
        players={players}
      />
    </>
  )
}

export default Tournament