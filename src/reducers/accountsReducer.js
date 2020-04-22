import { useResource } from '../hooks'

const accountsService = useResource('/api/accounts')

const accountsReducer = (state = [], action) => {
  switch (action.type) {
  case 'REGISTER_ACCOUNT':
    return [...state, action.newAccount ]
  default:
    return state
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