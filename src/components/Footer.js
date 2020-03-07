import React from 'react'
import { NavLink } from 'react-router-dom'
import { Row, Col, Nav } from 'react-bootstrap'
import { GoMarkGithub, GoQuestion } from 'react-icons/go'
import { IoMdHome } from 'react-icons/io'

const Footer = () => {

  return (
    <Row className='ninja-banner'>
      <Col xs={12} md={12} style={{ marginTop: '2rem' }}>
        <Nav className='justify-content-center'>
          <Nav.Link as='span'>
            <NavLink to='/' ><IoMdHome /></NavLink>
          </Nav.Link>
          <Nav.Link href='https://github.com/MiguelSombrero/ninja-ranking-react'>
            <GoMarkGithub />
          </Nav.Link>
          <Nav.Link as='span'>
            <NavLink to='/about' ><GoQuestion /></NavLink>
          </Nav.Link>
        </Nav>
      </Col>
      <Col xs={12} md={12} style={{ marginTop: '2rem' }} >
        <p>&copy; Miika Somero 2020</p>
      </Col>
    </Row>
  )
}

export default Footer