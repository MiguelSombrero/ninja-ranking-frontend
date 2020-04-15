import React from 'react'
import { NavLink } from 'react-router-dom'
import { logoutUser } from '../reducers/loginReducer'
import { useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Navbar, Nav, Row, Col } from 'react-bootstrap'
import { IoMdHome, IoIosLogOut } from 'react-icons/io'

const Navigation = (props) => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    try {
      dispatch(logoutUser())
      props.history.push('/')
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
  )
}

export default withRouter(Navigation)