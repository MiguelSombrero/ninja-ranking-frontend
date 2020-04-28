import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Row, Col, ListGroup } from 'react-bootstrap'
import { updateTournament } from '../reducers/tournamentsReducer'
import { useDispatch } from 'react-redux'
import NavigationSidePanel from './NavigationSidePanel'
import NinjaBanner from './NinjaBanner'
import ResultsTable from './ResultsTable'
import ResultForm from './ResultForm'
import ItemList from './ItemList'

const Tournament = ({ tournaments, history, user }) => {
  const [showAddResult, setShowAddResult] = useState(false)
  const dispatch = useDispatch()
  const tournamentId = useParams().id

  const players = useSelector(state =>
    state.players.filter(p => p.tournament_id === Number(tournamentId))
  )

  const tournament = tournaments.find(t => t.id === Number(tournamentId))

  const handleCloseAddResult = () => setShowAddResult(false)
  const handleShowAddResult = () => setShowAddResult(true)

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
          <ItemList
            title='Obstacles'
            items={tournament.obstacles.map(o => o.name)}
          />
        </Col>

        <Col xs={12} sm={{ span: 3, offset: 1 }} >
          <ItemList
            title='Players'
            items={players.map(p => p.nickname)}
          />
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
      <ResultForm
        players={players}
        obstacles={tournament.obstacles}
        show={showAddResult}
        close={handleCloseAddResult}
      />
    </>
  )
}

export default withRouter(Tournament)