import React from 'react'
import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { Row, Col, Nav } from 'react-bootstrap'
import { GoMarkGithub, GoQuestion, GoHome } from 'react-icons/go'

const Footer = () =>
  <Row className='ninja-banner mt-4'>
    <Col xs={12} md={12} className='mt-4'>
      <Nav className='justify-content-center'>
        <Nav.Link as='span'>
          <HashLink smooth to='/#top' ><GoHome /></HashLink>
        </Nav.Link>
        <Nav.Link href='https://github.com/MiguelSombrero/ninja-ranking-backend'>
          <GoMarkGithub />
        </Nav.Link>
        <Nav.Link as='span'>
          <NavLink to='/about' ><GoQuestion /></NavLink>
        </Nav.Link>
      </Nav>
    </Col>
    <Col xs={12} md={12} className='mt-4' >
      <p>&copy; Miika Somero 2020</p>
    </Col>
  </Row>

export default Footer