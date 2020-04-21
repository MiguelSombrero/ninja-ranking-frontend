import React, { useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { useDispatch, useSelector } from 'react-redux'
import { setUserToState } from './reducers/loginReducer'
import { getAllTournaments } from './reducers/tournamentsReducer'
import { getAllPlayers } from './reducers/playersReducer'
import { Container } from 'react-bootstrap'
import NavigationBar from './components/NavigationBar'
import FrontPage from './components/FrontPage'
import RegisterForm from './components/RegisterForm'
import TournamentForm from './components/TournamentForm'
import Tournaments from './components/Tournaments'
import Footer from './components/Footer'
import ManageTournament from './components/ManageTournament'
import About from './components/About'
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

  const tournamentsByLoggedUser =
    loggedUser && tournaments.filter(t => t.account_id === loggedUser.id)

  return (
    <Container fluid>
      <BrowserRouter>
        <NavigationBar
          user={loggedUser}
        />

        <Switch>
          <Route path='/about'>
            <About />
          </Route>

          <Route path='/register'>
            <RegisterForm />
          </Route>

          <Route path='/tournaments/:id'>
            <ManageTournament
              tournaments={tournaments}
            />
          </Route>

          <Route path='/tournaments'>
            <Tournaments
              tournaments={tournamentsByLoggedUser}
            />
          </Route>

          <Route path='/tournament'>
            <TournamentForm />
          </Route>

          <Route path='/'>
            <FrontPage
              user={loggedUser}
            />
          </Route>
        </Switch>

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
