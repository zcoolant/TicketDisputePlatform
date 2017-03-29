import { connect } from 'react-redux'
import React from 'react'
//import { browserHistory } from 'react-router'

class EnsureLoggedInContainer extends React.Component {
  //
  // componentDidMount() {
  //   const { isAuthenticated } = this.props
  //
  //   if (!isAuthenticated) {
  //     browserHistory.replace('/login')
  //   }
  // }

  render() {
    const { isAuthenticated } = this.props

    if (isAuthenticated) {
      return this.props.children
    } else {
      return <div>Please login</div>
    }
  }
}

EnsureLoggedInContainer.propTypes = {
  isAuthenticated: React.PropTypes.bool.isRequired,
  children: React.PropTypes.object.isRequired
}


const mapStateToProps = (state) => {
  const { isAuthenticated, profile, error } = state.auth
  return {
    isAuthenticated,
    profile,
    error
  }
}

export default connect(mapStateToProps)(EnsureLoggedInContainer)
