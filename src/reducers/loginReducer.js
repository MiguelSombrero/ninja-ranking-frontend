import { useResource, setToken } from '../hooks/'

const loginService = useResource('/api/login')

const loginReducer = (state = null, action) => {
  switch (action.type) {
  case 'LOGIN':
    return action.user
  case 'LOGOUT':
    return null
  default:
    return state
  }
}

export const loginUser = (credentials) => {
  return async dispatch => {
    const user = await loginService.login(credentials)

    window.localStorage.setItem('loggedNinjaRankingUser', JSON.stringify(user))
    setToken(user.token)

    dispatch({
      type: 'LOGIN',
      user
    })
  }
}

export const logoutUser = () => {
  return async dispatch => {
    window.localStorage.removeItem('loggedNinjaRankingUser')
    setToken(null)

    dispatch({
      type: 'LOGOUT'
    })
  }
}

export const setUserToState = user => {
  return async dispatch => {
    setToken(user.token)

    dispatch({
      type: 'LOGIN',
      user
    })
  }
}

export default loginReducer