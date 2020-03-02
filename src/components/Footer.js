import React from 'react'
import { NavLink } from 'react-router-dom'
import { Row, Col, Container, Nav } from 'react-bootstrap'
import { GoMarkGithub, GoQuestion } from 'react-icons/go'
import { IoMdHome } from 'react-icons/io'

const Footer = () => {
  const style = {
    color: 'white',
    marginTop: '2rem'
  }

  return (
    <Container fluid className='text-center m-2' style={style} >
      <Row>
        <Col>
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
      </Row>
      <Row>
        <Col>
          <p>&copy; Miika Somero 2020</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer