import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Tournament from './Tournament'
import ResultForm from './ResultForm'

const ManageTournament = ({ tournaments, user }) => {
  const [showAddResult, setShowAddResult] = useState(false)
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

  return (
    <>
      <Tournament
        tournament={tournament}
        players={players}
        handleShowAddResult={handleShowAddResult}
        user={user}
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

export default ManageTournament