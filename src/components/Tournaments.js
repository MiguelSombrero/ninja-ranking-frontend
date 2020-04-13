import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import NinjaBanner from './NinjaBanner'
import Tournament from './Tournament'
import NinjaButton from './NinjaButton'

const Tournaments = ({ tournaments }) => {
  const [showPastTournaments, SetShowPastTournaments] = useState(false)

  const activeTournaments = tournaments.filter(t => t.active)
  const inactiveTournaments = tournaments.filter(t => !t.active)

  return (
    <>
      <NinjaBanner
        text='Active tournaments'
      />
      <Row>
        <Col xs={12} sm={{ span: 6, offset: 3 }} >
          {activeTournaments.map(t =>
            <Tournament
              key={t.id}
              tournament={t}
            />
          )}
        </Col>
      </Row>
      <NinjaBanner
        text='Past tournaments'
      />
      <Row>
        <Col xs={12} sm={{ span: 6, offset: 3 }} >
          {showPastTournaments ?
            inactiveTournaments.map(t =>
              <Tournament
                key={t.id}
                tournament={t}
              />
            )
            :
            <NinjaButton
              text='Show'
              onClick={() => SetShowPastTournaments(true)}
            />
          }
        </Col>
      </Row>
    </>
  )
}

export default Tournaments