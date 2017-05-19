import { connect } from 'react-redux'
import React from 'react'

class EnsureLoggedInContainer extends React.Component {
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
  const { isAuthenticated } = state.auth;
  return {isAuthenticated}
}

export default connect(mapStateToProps)(EnsureLoggedInContainer)
