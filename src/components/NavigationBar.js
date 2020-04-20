import React from 'react'
import { NavLink} from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { logoutUser } from '../reducers/loginReducer'
import { useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Navbar, Nav, Row, Col } from 'react-bootstrap'
import { GoHome } from 'react-icons/go'

const Navigation = ({ user }) => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    try {
      dispatch(logoutUser())
    } catch (exception) {
      console.log('logout failed, bollocks', exception)
    }
  }

  return (
    <Row>
      <Navbar as={Col} collapseOnSelect expand='lg' style={{ backgroundColor: 'rgb(252, 156, 217)' }}>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='#' as='span'>
              <NavLink to='/' ><GoHome /></NavLink>
            </Nav.Link>
          </Nav>

          {user &&
            <>
              <Nav className='justify-content-center mr-auto'>
                <Nav.Link href='#' as='span' >
                  <NavLink to='/tournaments' >Manage tournaments</NavLink>
                </Nav.Link>
                <Nav.Link href='#' as='span' >
                  <NavLink to='/tournament' >Create new tournament</NavLink>
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href='#' as='span'>
                  <NavLink to='/' onClick={handleLogout} >Logout</NavLink>
                </Nav.Link>
              </Nav>
            </>
          }

          {!user &&
            <Nav>
              <Nav.Link href='#' as='span'>
                <HashLink smooth to='/#loginform' >Login</HashLink>
              </Nav.Link>
              <Nav.Link href='#' as='span'>
                <NavLink to='/register' >Create account</NavLink>
              </Nav.Link>
            </Nav>
          }
        </Navbar.Collapse>
      </Navbar>
    </Row>
  )
}

export default withRouter(Navigation)