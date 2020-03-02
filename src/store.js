import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import loginReducer from './reducers/loginReducer'
import accountsReducer from './reducers/accountsReducer'
import tournamentsReducer from './reducers/tournamentsReducer'

const reducer = combineReducers({
  user: loginReducer,
  accounts: accountsReducer,
  tournaments: tournamentsReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store