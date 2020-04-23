import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import LoginForm from './LoginForm'
import NinjaBanner from './NinjaBanner'
import TournamentOverview from './TournamentOverview'

const FrontPage = ({ user, tournaments }) => {

  const activeTournaments = tournaments.filter(t => t.active)

  const renderTournaments = () =>
    <Col xs={12} sm={6} className='mt-4'>
      {activeTournaments.map(t =>
        <TournamentOverview
          key={t.id}
          tournament={t}
        />
      )}
    </Col>

  return (
    <Row className='justify-content-center'>
      <Image fluid
        src='/ninja_ranking_banner.jpg'
        style={{ width: '100%', height: 'auto' }}
      />

      {!user &&
        <LoginForm />
      }

      {user &&
        <Col>
          <NinjaBanner
            text={`Welcome back ${user.name}`}
          />
          <h3 className='text-center'>Here is some recent tournaments to check:</h3>
          <Row className='justify-content-center'>
            {renderTournaments()}
          </Row>
        </Col>
      }
    </Row>
  )
}

export default FrontPage