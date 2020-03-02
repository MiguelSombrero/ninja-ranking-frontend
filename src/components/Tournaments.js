import React from 'react'
import { Row, Col } from 'react-bootstrap'
import NinjaBanner from './NinjaBanner'
import Tournament from './Tournament'
import NavigationSidePanel from './NavigationSidePanel'

const Tournaments = ({ tournaments }) => {

  const activeTournaments = tournaments.filter(t => t.active)

  return (
    <>
      <NinjaBanner
        text='Active tournaments'
      />
      <Row>
        <Col>
          <NavigationSidePanel
          />
        </Col>
        <Col>
          {activeTournaments.map(t =>
            <Tournament
              key={t.id}
              tournament={t}
            />
          )}
        </Col>
      </Row>
    </>
  )
}

export default Tournaments