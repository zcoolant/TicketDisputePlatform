import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchCase, deleteCase } from '../../actions/index';
import { Link } from 'react-router';
import {LinkContainer} from 'react-router-bootstrap'

class CasesShow extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.fetchCase(this.props.params.id);
  }

  onDeleteClick() {
    this.props.deleteCase(this.props.params.id)
      .then(() => { this.context.router.push('/case'); });
  }

  render() {
    const { myCase } = this.props;

    if (!myCase) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <LinkContainer to="/case">
          <button className="btn btn-primary pull-xs-right">
            Back
          </button>
        </LinkContainer>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}>
          Delete Case
        </button>
        <h3>{myCase.title}</h3>
        <h6>Categories: {myCase.categories}</h6>
        <p>{myCase.content}</p>
      </div>
    );
  }
}

CasesShow.propTypes = {
  fetchCase: React.PropTypes.func.isRequired,
  params: React.PropTypes.object.isRequired,
  deleteCase: React.PropTypes.func.isRequired,
  myCase: React.PropTypes.object.isRequired,
}

function mapStateToProps(state) {
  return { myCase: state.myCases.case };
}

export default connect(mapStateToProps, { fetchCase, deleteCase })(CasesShow);
