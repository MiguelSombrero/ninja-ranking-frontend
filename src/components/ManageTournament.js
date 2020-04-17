import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Tournament from './Tournament'
import AddResult from './AddResult'

const ManageTournament = ({ tournaments }) => {
  const [showAddResult, setShowAddResult] = useState(false)
  const [currentPlayer, setCurrentPlayer] = useState(null)
  const tournamentId = useParams().id

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

  return (
    <>
      <Tournament
        tournament={tournament}
        players={players}
        addResult={handleShowAddResult}
      />
      <AddResult
        player={currentPlayer}
        obstacles={tournament.obstacles}
        show={showAddResult}
        close={handleCloseAddResult}
      />
    </>
  )
}

export default ManageTournament