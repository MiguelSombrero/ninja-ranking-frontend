import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Row, Col, ListGroup } from 'react-bootstrap'
import NavigationSidePanel from './NavigationSidePanel'
import NinjaBanner from './NinjaBanner'
import AddResult from './AddResult'

const ManageTournament = ({ tournaments }) => {
  const tournamentId = useParams().id
  const [showAddResult, setShowAddResult] = useState(false)
  const [currentPlayer, setCurrentPlayer] = useState(null)

  const players = useSelector(state =>
    state.players.filter(p => p.tournament_id === Number(tournamentId))
  )

  const tournament = tournaments.find(t => t.id === Number(tournamentId))

  if (!tournament) {
    return null
  }

  const handleCloseAddResult = () => setShowAddResult(false)

  const handleShowAddResult = player => {
    setCurrentPlayer(player)
    setShowAddResult(true)
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
      <ListGroup.Item key={p.id} onClick={() => handleShowAddResult(p)}>
        {p.nickname}
      </ListGroup.Item>
    )

  return (
    <>
      <NinjaBanner
        text={tournament.name}
      />
      <AddResult
        player={currentPlayer}
        obstacles={tournament.obstacles}
        show={showAddResult}
        close={handleCloseAddResult}
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

export default ManageTournament