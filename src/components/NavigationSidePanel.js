import React from 'react'
import { Nav } from 'react-bootstrap'
import NinjaButton from './NinjaButton'

const NavigationSidePanel = () => {
  return (
    <Nav className='flex-column'>
      <Nav.Link href='#' as='span'>
        <NinjaButton
          text='press button'
        />
      </Nav.Link>
      <Nav.Link href='#' as='span'>
        <NinjaButton
          text='press button'
        />
      </Nav.Link>
      <Nav.Link href='#' as='span'>
        <NinjaButton
          text='press button'
        />
      </Nav.Link>
    </Nav>
  )
}

export default NavigationSidePanel