import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import LoginForm from './LoginForm'
import NinjaBanner from './NinjaBanner'
import TournamentOverview from './TournamentOverview'

const FrontPage = ({ user, tournaments }) => {

  const activeTournaments = tournaments.filter(t => t.active)

  return (
    <>
      <Row>
        <Image
          src='/ninja_ranking_banner.jpg'
          style={{ width: '100%', height: 'auto' }}
        />
      </Row>

      <NinjaBanner
        text={user
          ? `Welcome back ${user.name}`
          : 'Login to Ninja Ranking'
        }
      />

      {!user &&
        <Row>
          <Col className='form'>
            <LoginForm />
          </Col>
        </Row>
      }

      {user &&
        <Row className='justify-content-center'>
          <h3 className='text-center'>Here is some recent tournaments to check:</h3>
          <Col xs={12} sm={6} className='mt-4'>
            {activeTournaments.map(t =>
              <TournamentOverview
                key={t.id}
                tournament={t}
              />
            )}
          </Col>
        </Row>
      }
    </>
  )
}

export default FrontPage