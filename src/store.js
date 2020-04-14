import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import loginReducer from './reducers/loginReducer'
import accountsReducer from './reducers/accountsReducer'
import tournamentsReducer from './reducers/tournamentsReducer'
import obstaclesReducer from './reducers/obstaclesReducer'
import playersReducer from './reducers/playersReducer'
import resultsReducer from './reducers/resultsReducer'

const reducer = combineReducers({
  user: loginReducer,
  accounts: accountsReducer,
  tournaments: tournamentsReducer,
  obstacles: obstaclesReducer,
  players: playersReducer,
  results: resultsReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store