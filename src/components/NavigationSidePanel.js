import React from 'react'
import { connect } from 'react-redux'
import { createObstacle } from '../reducers/obstaclesReducer'
import { createPlayer } from '../reducers/playersReducer'
import { Nav } from 'react-bootstrap'
import NinjaButton from './NinjaButton'
import ObstacleForm from './ObstacleForm'
import PlayerForm from './PlayerForm'

const NavigationSidePanel = (props) => {

  return (
    <Nav className='flex-column'>
      <ObstacleForm
        createObstacle={props.createObstacle}
        tournament={props.tournament}
      />
      <PlayerForm
        createPlayer={props.createPlayer}
        tournament={props.tournament}
      />
      <NinjaButton
        text='End tournament'
      />
      <NinjaButton
        text='Inactive tournaments'
      />
    </Nav>
  )
}

const mapDispatchToProps = {
  createObstacle, createPlayer
}

export default connect(null, mapDispatchToProps)(NavigationSidePanel)