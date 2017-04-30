import React from 'react'
import Header from '../Header/Header'
import { connect } from 'react-redux'
import { checkLogin } from '../../actions'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.props.checkLogin() // check is Auth0 lock is authenticating after login callback
  }

  render() {

    const style = {
      'padding-top': '70px'
    };

    return(
      <div>
        <Header />
        <div className='container' style={style}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.element.isRequired,
  checkLogin: React.PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkLogin: () => dispatch(checkLogin())
  }
}

export default connect(
  null, // no mapStateToProps
  mapDispatchToProps
)(App)


