import React, { useEffect } from 'react'
import { getAllPlayers } from '../reducers/playersReducer'
import { connect } from 'react-redux'
import { Row, Col, ListGroup } from 'react-bootstrap'
import NavigationSidePanel from './NavigationSidePanel'
import NinjaBanner from './NinjaBanner'

const ManageTournament = ({ tournament, players, getAllPlayers }) => {
  useEffect(() => {
    getAllPlayers()
  }, [])

  if (!tournament) {
    return null
  }

  const playersTohow = players.filter(p => p.tournament_id === tournament.id)

  const renderObstacles = tournament.obstacles[0] === null
    ? () => 'no obstacles'
    : () => tournament.obstacles.map(t =>
      <ListGroup.Item key={t.id} >
        {t.name}
      </ListGroup.Item>
    )

  const renderPlayers = players.length === 0
    ? () => 'no players'
    : () => playersTohow.map(p =>
      <ListGroup.Item key={p.id} >
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
    </>
  )
}

const mapStateToProps = state => {
  return {
    players: state.players
  }
}

const mapDispatchToProps = {
  getAllPlayers
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageTournament)