import { useResource } from '../hooks'

const accountsService = useResource('/api/accounts')

const accountsReducer = (state = [], action) => {
  switch (action.type) {
  case 'GET_ACCOUNTS':
    return action.accounts
  case 'REGISTER_ACCOUNT':
    return [...state, action.newAccount ]
  default:
    return state
  }
}

export const getAllAccounts = () => {
  return async dispatch => {
    const accounts = await accountsService.getAll()

    dispatch({
      type: 'GET_ACCOUNTS',
      accounts
    })
  }
}

export const registerAccount = account => {
  return async dispatch => {
    const newAccount = await accountsService.create(account)

    dispatch({
      type: 'REGISTER_ACCOUNT',
      newAccount
    })
  }
}

export default accountsReducer