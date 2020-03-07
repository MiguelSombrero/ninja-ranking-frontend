import React from 'react'
import { Row, Col } from 'react-bootstrap'
import NinjaBanner from './NinjaBanner'
import Tournament from './Tournament'

const Tournaments = ({ tournaments }) => {

  const activeTournaments = tournaments.filter(t => t.active)

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
    </>
  )
}

export default Tournaments