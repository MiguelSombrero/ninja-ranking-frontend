import { useResource } from '../hooks'

const playerService = useResource('/api/players')

const playersReducer = (state = [], action) => {
  switch (action.type) {
  case 'GET_PLAYERS':
    return action.players
  case 'CREATE_PLAYER':
    return [...state, action.newPlayer ]
  case 'UPDATE_PLAYER':
    return state.map(p => p.id === action.updatedPlayer.id ? action.updatedPlayer : p)
  default:
    return state
  }
}

export const getAllPlayers = () => {
  return async dispatch => {
    const players = await playerService.getAll()

    dispatch({
      type: 'GET_PLAYERS',
      players
    })
  }
}

export const createPlayer = player => {
  return async dispatch => {
    const newPlayer = await playerService.create(player)

    dispatch({
      type: 'CREATE_PLAYER',
      newPlayer
    })
  }
}

export const updatePlayer = updatedPlayer => {
  return {
    type: 'UPDATE_PLAYER',
    updatedPlayer
  }
}

export default playersReducer