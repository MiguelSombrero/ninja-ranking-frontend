import { useResource } from '../hooks'

const resultService = useResource('/api/results')

const resultsReducer = (state = [], action) => {
  switch (action.type) {
  case 'GET_RESULTS':
    return action.results
  case 'CREATE_RESULT':
    return [...state, action.newResult ]
  default:
    return state
  }
}

export const getAllResults = () => {
  return async dispatch => {
    const results = await resultService.getAll()

    dispatch({
      type: 'GET_RESULTS',
      results
    })
  }
}

export const createResult = (result) => {
  return async dispatch => {
    const newResult = await resultService.create(result)

    dispatch({
      type: 'CREATE_RESULT',
      newResult
    })

    return newResult
  }
}

export default resultsReducer