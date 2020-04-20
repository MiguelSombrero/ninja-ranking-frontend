import { useResource } from '../hooks'

const tournamentService = useResource('/api/tournaments')

const tournamentsReducer = (state = [], action) => {
  switch (action.type) {
  case 'GET_TOURNAMENTS':
    return action.tournaments
  case 'CREATE_TOURNAMENT':
    return [...state, action.newTournament ]
  case 'UPDATE_TOURNAMENT':
    return state.map(t => t.id === action.updatedTournament.id ? action.updatedTournament : t)
  default:
    return state
  }
}

export const getAllTournaments = () => {
  return async dispatch => {
    const tournaments = await tournamentService.getAll()

    dispatch({
      type: 'GET_TOURNAMENTS',
      tournaments
    })
  }
}

export const createTournament = (tournament) => {
  return async dispatch => {
    const newTournament = await tournamentService.create(tournament)

    dispatch({
      type: 'CREATE_TOURNAMENT',
      newTournament
    })
  }
}

export const updateTournament = (tournament) => {
  return async dispatch => {
    const updatedTournament = await tournamentService.update(tournament.id, tournament)
    dispatch(updateTournamentState(updatedTournament))
  }
}

export const updateTournamentState = updatedTournament => {
  return {
    type: 'UPDATE_TOURNAMENT',
    updatedTournament
  }
}

export default tournamentsReducer