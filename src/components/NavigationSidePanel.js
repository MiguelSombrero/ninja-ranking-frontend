import React from 'react'
import { Nav } from 'react-bootstrap'
import NinjaButton from './NinjaButton'
import ObstacleForm from './ObstacleForm'
import PlayerForm from './PlayerForm'

const NavigationSidePanel = ({ tournament }) =>
  <Nav className='flex-column'>
    <ObstacleForm
      tournament={tournament}
    />
    <PlayerForm
      tournament={tournament}
    />
    <NinjaButton
      text='End tournament'
    />
    <NinjaButton
      text='Past tournaments'
    />
  </Nav>

export default NavigationSidePanel