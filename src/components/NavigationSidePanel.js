import React from 'react'
import { Nav } from 'react-bootstrap'
import NinjaButton from './NinjaButton'
import ObstacleForm from './ObstacleForm'
import PlayerForm from './PlayerForm'

const NavigationSidePanel = ({
  tournament,
  handleShowAddResult,
  handleEndTournament
}) =>

  <Nav className='flex-column'>
    <ObstacleForm
      tournament={tournament}
    />
    <PlayerForm
      tournament={tournament}
    />
    <NinjaButton
      text='Add result'
      onClick={handleShowAddResult}
    />
    <NinjaButton
      text='End tournament'
      onClick={handleEndTournament}
    />
  </Nav>

export default NavigationSidePanel