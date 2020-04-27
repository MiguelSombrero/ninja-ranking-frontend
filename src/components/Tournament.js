import React from 'react'
import { withRouter } from 'react-router-dom'
import { Row, Col, ListGroup } from 'react-bootstrap'
import { updateTournament } from '../reducers/tournamentsReducer'
import { useDispatch } from 'react-redux'
import NavigationSidePanel from './NavigationSidePanel'
import NinjaBanner from './NinjaBanner'
import ResultsTable from './ResultsTable'

const Tournament = ({ tournament, history, players, handleShowAddResult, user }) => {
  const dispatch = useDispatch()

  if (!tournament) {
    return null
  }

  const handleEndTournament = async () => {
    try {
      const updatedTournament = { ...tournament, active: false }
      await dispatch(updateTournament(updatedTournament))
      history.push('/tournaments')

    } catch (exception) {
      console.log(exception)
    }
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
      <ListGroup.Item key={p.id}>
        {p.nickname}
      </ListGroup.Item>
    )

  return (
    <>
      <NinjaBanner
        text={tournament.name}
      />
      <Row>
        {tournament.active && user.id === tournament.account.id &&
        <Col xs={12} sm={{ span: 3, offset: 1 }} >
          <NavigationSidePanel
            tournament={tournament}
            handleShowAddResult={handleShowAddResult}
            handleEndTournament={handleEndTournament}
          />
        </Col>
        }
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
      <ResultsTable
        obstacles={tournament.obstacles}
        players={players}
      />
    </>
  )
}

export default withRouter(Tournament)