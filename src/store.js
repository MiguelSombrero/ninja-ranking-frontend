import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import loginReducer from './reducers/loginReducer'
import accountsReducer from './reducers/accountsReducer'
import tournamentsReducer from './reducers/tournamentsReducer'
import obstaclesReducer from './reducers/obstaclesReducer'
import playersReducer from './reducers/playersReducer'

const reducer = combineReducers({
  user: loginReducer,
  accounts: accountsReducer,
  tournaments: tournamentsReducer,
  obstacles: obstaclesReducer,
  players: playersReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store