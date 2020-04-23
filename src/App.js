import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { useDispatch, useSelector } from 'react-redux'
import { setUserToState } from './reducers/loginReducer'
import { getAllTournaments } from './reducers/tournamentsReducer'
import { getAllPlayers } from './reducers/playersReducer'
import { Container } from 'react-bootstrap'
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'
import Router from './components/Router'
import { GoArrowUp } from 'react-icons/go'

import './App.css'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const logged = window.localStorage.getItem('loggedNinjaRankingUser')
    if (logged) {
      dispatch(setUserToState(JSON.parse(logged)))
    }
  }, [])

  useEffect(() => {
    dispatch(getAllTournaments())
  }, [])

  useEffect(() => {
    dispatch(getAllPlayers())
  }, [])

  const loggedUser = useSelector(state => state.user)
  const tournaments = useSelector(state => state.tournaments)

  return (
    <Container fluid>
      <BrowserRouter>
        <NavigationBar
          user={loggedUser}
        />

        <Router
          user={loggedUser}
          tournaments={tournaments}
        />

        <HashLink smooth to='#top'>
          <GoArrowUp
            style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: '9999' }}
          />
        </HashLink>
        <Footer/>
      </BrowserRouter>
    </Container>
  )
}

export default App
