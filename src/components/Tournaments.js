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
    <Row className='justify-content-center mt-4'>
      <Col xs={12} sm={6}>
        <NinjaButton
          text='Show past tournaments'
          onClick={() => SetShowPastTournaments(true)}
        />
      </Col>
    </Row>

  const renderTournaments = tournaments =>
    <Row className='justify-content-center'>
      <Col xs={12} sm={6} >
        {tournaments.map(t =>
          <TournamentOverview
            key={t.id}
            tournament={t}
          />
        )}
      </Col>
    </Row>

  return (
    <>
      <NinjaBanner
        text='Your tournaments'
      />

      {renderTournaments(activeTournaments)}

      {showPastTournaments
        ? renderTournaments(pastTournaments)
        : renderShowButton()
      }
    </>
  )
}

export default Tournaments