import React, { useEffect } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { setUserToState } from './reducers/loginReducer'
import { getAllTournaments } from './reducers/tournamentsReducer'
import { getAllPlayers } from './reducers/playersReducer'
import { getAllObstacles } from './reducers/obstaclesReducer'
import { Container } from 'react-bootstrap'
import NavigationBar from './components/NavigationBar'
import FrontPage from './components/FrontPage'
import RegisterForm from './components/RegisterForm'
import LoginForm from './components/LoginForm'
import TournamentForm from './components/TournamentForm'
import Tournaments from './components/Tournaments'
import Footer from './components/Footer'
import ManageTournament from './components/ManageTournament'

import './App.css'

const App = (props) => {

  useEffect(() => {
    const logged = window.localStorage.getItem('loggedNinjaRankingUser')
    if (logged) {
      props.setUserToState(JSON.parse(logged))
    }
  }, [])

  useEffect(() => {
    props.getAllTournaments()
  }, [])

  useEffect(() => {
    props.getAllPlayers()
  }, [])

  useEffect(() => {
    props.getAllObstacles()
  }, [])

  const tournamentsByLoggedUser = () =>
    props.tournaments.filter(t => t.account_id === props.user.id)

  const tournamentById = (id) =>
    props.tournaments.find(t => t.id === Number(id))

  const playersByTournamentId = (id) =>
    props.players.filter(p => p.tournament_id === Number(id))

  const obstaclesByTournamentId = (id) =>
    props.obstacles.filter(o => o.tournament_id === Number(id))

  return (
    <Container fluid>
      <BrowserRouter>
        <NavigationBar
          user={props.user}
        />

        <Route
          exact path='/'
          render={() =>
            <FrontPage
              user={props.user}
            />
          }
        />

        <Route
          exact path='/register'
          render={() =>
            <RegisterForm
            />
          }
        />

        <Route
          exact path='/login'
          render={() =>
            <LoginForm
            />
          }
        />

        {props.user &&
          <>
            <Route
              exact path='/tournament'
              render={() =>
                <TournamentForm
                />
              }
            />

            <Route
              exact path='/tournaments'
              render={() =>
                <Tournaments
                  tournaments={tournamentsByLoggedUser()}
                />
              }
            />

            <Route
              exact path='/tournaments/:id'
              render={({ match }) =>
                <ManageTournament
                  tournament={tournamentById(match.params.id)}
                  players={playersByTournamentId(match.params.id)}
                  obstacles={obstaclesByTournamentId(match.params.id)}
                />
              }
            />
          </>
        }

        <Footer
        />

      </BrowserRouter>
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    tournaments: state.tournaments,
    players: state.players,
    obstacles: state.obstacles
  }
}

const mapDispatchToProps = {
  setUserToState,
  getAllTournaments,
  getAllPlayers,
  getAllObstacles
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
