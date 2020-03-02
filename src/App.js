import React, { useEffect } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { setUserToState } from './reducers/loginReducer'
import NavigationBar from './components/NavigationBar'
import FrontPage from './components/FrontPage'
import RegisterForm from './components/RegisterForm'
import LoginForm from './components/LoginForm'
import TournamentForm from './components/TournamentForm'
import Footer from './components/Footer'

import './App.css'

const App = (props) => {

  useEffect(() => {
    const logged = window.localStorage.getItem('loggedNinjaRankingUser')
    if (logged) {
      props.setUserToState(JSON.parse(logged))
    }
  }, [])

  return (
    <>
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
          </>
        }

        <Footer
        />
      </BrowserRouter>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  setUserToState
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
