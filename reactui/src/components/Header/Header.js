import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { loginRequest, logoutSuccess } from '../../actions'

const Header = ({ isAuthenticated, profile, onLoginClick, onLogoutClick }) => {
  return (
    <div>
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                    aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
            </button>
            <Link className="navbar-brand" to="/">TicketDisputer</Link>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              {!isAuthenticated ?
                (<li><a onClick={onLoginClick} href='#'>Login</a></li>) :
                (
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                       aria-haspopup="true" aria-expanded="false" style={{padding: "8px"}}>
                      <img src={profile.picture} height="35px"/> <span className="caret"/>
                    </a>
                    <ul className="dropdown-menu">
                      <li><Link to='/case'>My Cases</Link></li>
                      <li><Link to='/case/new'>New Case</Link></li>
                      <li><Link to='/profile'>Profile</Link></li>
                      <li role="separator" className="divider"/>
                      <li><a onClick={onLogoutClick}>Logout</a></li>
                    </ul>
                  </li>
                )
              }
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

Header.propTypes = {
  isAuthenticated: React.PropTypes.bool.isRequired,
  profile: React.PropTypes.object,
  error: React.PropTypes.string,
  onLoginClick: React.PropTypes.func.isRequired,
  onLogoutClick: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  const { isAuthenticated, profile, error } = state.auth
  return {
    isAuthenticated,
    profile,
    error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginClick: () => dispatch(loginRequest()),
    onLogoutClick: () => dispatch(logoutSuccess())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)