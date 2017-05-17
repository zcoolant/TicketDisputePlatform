import React, { Component, PropTypes} from 'react';
import { connect } from 'react-redux'
import { loginRequest } from '../../actions'
import { CaseIndex} from './../index';

class HomePage extends Component{
  static contextTypes = {
    router: PropTypes.object
  };

  render() {
    if(!this.props.isAuthenticated) {
      return (
        <div>
          <div className="jumbotron">
            <h1>Login and submit your first case now!</h1>
            <p>Want to dispute a ticket, we help you do it right.</p>
            <p><button className="btn btn-primary btn-lg" onClick={loginRequest}>Login</button></p>
          </div>
        </div>
      )
    } else {
      return <CaseIndex/>
    }
  }
}


HomePage.propTypes = {
  isAuthenticated: React.PropTypes.bool.isRequired,
  profile: React.PropTypes.object,
  error: React.PropTypes.string,
  onLoginClick: React.PropTypes.func.isRequired,
  onLogoutClick: React.PropTypes.func.isRequired,
  children: React.PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  const { isAuthenticated, profile, error } = state.auth;
  return {
    isAuthenticated,
    profile,
    error
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginClick: () => dispatch(loginRequest()),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)
