import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import NinjaBanner from './NinjaBanner'
import TournamentOverview from './TournamentOverview'
import NinjaButton from './NinjaButton'

const Tournaments = ({ tournaments }) => {
  const [showPastTournaments, SetShowPastTournaments] = useState(false)

  if (!tournaments) {
    return null
  }

  const activeTournaments = tournaments.filter(t => t.active)
  const pastTournaments = tournaments.filter(t => !t.active)

  const renderShowButton = () =>
    <Col xs={12} sm={6}>
      <NinjaButton
        text='Show past tournaments'
        onClick={() => SetShowPastTournaments(true)}
      />
    </Col>

  const renderTournaments = tournaments =>
    <Col xs={12} sm={6} >
      {tournaments.map(t =>
        <TournamentOverview
          key={t.id}
          tournament={t}
        />
      )}
    </Col>

  return (
    <>
      <NinjaBanner
        text='Your tournaments'
      />
      <Row className='justify-content-center'>
        {renderTournaments(activeTournaments)}
      </Row>
      <Row className='justify-content-center mt-4'>
        {showPastTournaments
          ? renderTournaments(pastTournaments)
          : renderShowButton()
        }
      </Row>
    </>
  )
}

export default Tournaments