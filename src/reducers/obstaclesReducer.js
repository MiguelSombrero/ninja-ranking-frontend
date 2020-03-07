import { useResource } from '../hooks'

const obstacleService = useResource('/api/obstacles')

const obstaclesReducer = (state = [], action) => {
  switch (action.type) {
  case 'GET_OBSTACLES':
    return action.obstacles
  case 'CREATE_OBSTACLE':
    return [...state, action.newObstacle ]
  default:
    return state
  }
}

export const getAllObstacles = () => {
  return async dispatch => {
    const obstacles = await obstacleService.getAll()

    dispatch({
      type: 'GET_OBSTACLES',
      obstacles
    })
  }
}

export const createObstacle = (obstacle) => {
  return async dispatch => {
    const newObstacle = await obstacleService.create(obstacle)

    dispatch({
      type: 'CREATE_OBSTACLE',
      newObstacle
    })
  }
}

export default obstaclesReducer