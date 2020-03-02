import React from 'react'
import { NavLink } from 'react-router-dom'
import { logoutUser } from '../reducers/loginReducer'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Navbar, Nav, Row, Col, Container } from 'react-bootstrap'
import { IoMdHome, IoIosLogOut } from 'react-icons/io'

const Navigation = (props) => {

  const handleLogout = () => {
    try {
      props.logoutUser()
      props.history.push('/')
    } catch (exception) {
      console.log('logout failed, bollocks', exception)
    }
  }

  return (
    <Container fluid>
      <Row>
        <Navbar as={Col} collapseOnSelect expand='lg' bg='dark' variant='dark' >
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link href='#' as='span'>
                <NavLink to='/' ><IoMdHome /></NavLink>
              </Nav.Link>

              {!props.user &&
              <>
                <Nav.Link href='#' as='span'>
                  <NavLink to='/login' >Login</NavLink>
                </Nav.Link>
                <Nav.Link href='#' as='span'>
                  <NavLink to='/register' >Create account</NavLink>
                </Nav.Link>
              </>
              }

              {props.user &&
              <>
                <Nav.Link href='#' as='span' >
                  <NavLink to='/tournaments' >My tournaments</NavLink>
                </Nav.Link>
                <Nav.Link href='#' as='span' >
                  <NavLink to='/tournament' >Create tournament</NavLink>
                </Nav.Link>
                <Nav.Link href='#' as='span'>
                  <Nav.Item onClick={handleLogout} ><IoIosLogOut /></Nav.Item>
                </Nav.Link>
              </>
              }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Row>
    </Container>
  )
}

const mapDispatchToProps = {
  logoutUser
}

export default connect(null, mapDispatchToProps)(withRouter(Navigation))