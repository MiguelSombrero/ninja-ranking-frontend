import React from 'react'
import { Route, Switch } from 'react-router-dom'
import FrontPage from './FrontPage'
import RegisterForm from './RegisterForm'
import About from './About'
import TournamentForm from './TournamentForm'
import Tournaments from './Tournaments'
import ManageTournament from './ManageTournament'

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

      {user &&
      <Route path='/tournaments/:id'>
        <ManageTournament
          tournaments={tournaments}
          user={user}
        />
      </Route>
      }

      {user &&
      <Route path='/tournaments'>
        <Tournaments
          tournaments={tournamentsByLoggedUser}
        />
      </Route>
      }

      {user &&
      <Route path='/tournament'>
        <TournamentForm />
      </Route>
      }

      <Route exact path='/'>
        <FrontPage
          user={user}
          tournaments={tournaments}
        />
      </Route>
    </Switch>
  )
}

export default Router