import React from 'react'
import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { Row, Col, Nav } from 'react-bootstrap'
import { GoMarkGithub, GoQuestion } from 'react-icons/go'
import { IoMdHome } from 'react-icons/io'

const Footer = () =>
  <Row className='ninja-banner mt-5'>
    <Col xs={12} md={12} className='mt-4'>
      <Nav className='justify-content-center'>
        <Nav.Link as='span'>
          <HashLink smooth to='/#top' ><IoMdHome /></HashLink>
        </Nav.Link>
        <Nav.Link href='https://github.com/MiguelSombrero/ninja-ranking-react'>
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