import React from 'react'
import { Link } from 'react-router'
import {Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap'

const Header = ({ isAuthenticated, profile, onLoginClick, onLogoutClick }) => {
  return (
    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">TicketDisputer</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#"><Link to='/'>Home</Link></NavItem>
          <NavItem eventKey={2} href="#"><Link to='/about'>About</Link></NavItem>

        </Nav>
        <Nav pullRight>
          {!isAuthenticated ?
            (<NavItem eventKey={1} onClick={onLoginClick}>Login</NavItem>) :
            (
              <NavDropdown eventKey={3} title={<img src={profile.picture} height="28px"/>} id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>My cases</MenuItem>
                <MenuItem eventKey={3.2}>New Case</MenuItem>
                <MenuItem eventKey={3.3}>Profile</MenuItem>
                <MenuItem divider/>
                <MenuItem eventKey={3.4} onClick={onLogoutClick}>Logout</MenuItem>
              </NavDropdown>)
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>)
}

Header.propTypes = {
  isAuthenticated: React.PropTypes.bool.isRequired,
  profile: React.PropTypes.object,
  error: React.PropTypes.string,
  onLoginClick: React.PropTypes.func.isRequired,
  onLogoutClick: React.PropTypes.func.isRequired
}

export default Header
