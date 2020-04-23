import React from 'react'
import { Route, Switch } from 'react-router-dom'
import FrontPage from './FrontPage'
import RegisterForm from './RegisterForm'
import TournamentForm from './TournamentForm'
import Tournaments from './Tournaments'
import ManageTournament from './ManageTournament'
import About from './About'

const Router = ({ user, tournaments }) => {

  const tournamentsByLoggedUser =
    user && tournaments.filter(t => t.account.id === user.id)

  return (
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
          user={user}
          tournaments={tournaments}
        />
      </Route>
    </Switch>
  )
}

export default Router