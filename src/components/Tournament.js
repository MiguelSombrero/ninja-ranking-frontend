import React from 'react'
import { NavLink } from 'react-router-dom'
import moment from 'moment'
import { Row, Col } from 'react-bootstrap'

const Tournament = ({ tournament }) => {

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
        <Col>
          <h4 className='text-muted'>
            Created on {moment(tournament.created).format('MMMM Do YYYY')}
          </h4>
        </Col>
      </Row>
      <Row className='mb-4' >
        <Col>
          Items here
        </Col>
        <Col>
          players here
        </Col>
      </Row>
    </>
  )
}

export default Tournament