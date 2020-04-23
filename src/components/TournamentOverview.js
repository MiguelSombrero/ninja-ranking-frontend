import React from 'react'
import { NavLink } from 'react-router-dom'
import moment from 'moment'
import { Row, Col } from 'react-bootstrap'

const TournamentOverview = ({ tournament }) => {

  return (
    <>
      <Row style={{ borderTop: '1px solid lightgrey' }}>
        <Col>
          <NavLink to={`/tournaments/${tournament.id}`}>
            <h2>{tournament.name}</h2>
          </NavLink>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6}>
          <h6 className='text-muted'>
            Created on {moment(tournament.created).format('MMMM Do YYYY')},
          </h6>
          <h6 className='text-muted'>
            by {tournament.account.name}
          </h6>
        </Col>
        <Col xs={12} sm={6}>
          <h6 className='float-right' style={{ color: tournament.active ? 'green' : 'red' }}>
            {tournament.active ? 'active' : 'inactive' }
          </h6>
        </Col>
      </Row>
    </>
  )
}

export default TournamentOverview