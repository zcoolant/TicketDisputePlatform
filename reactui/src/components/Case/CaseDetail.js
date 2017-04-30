import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchCase, deleteCase } from '../../actions/index';
import { Link } from 'react-router';

class CasesShow extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.fetchCase(this.props.params.id);
  }

  onDeleteClick() {
    this.props.deleteCase(this.props.params.id)
      .then(() => { this.context.router.push('/'); });
  }

  render() {
    const { myCase } = this.props;

    if (!myCase) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back To Index</Link>
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
  return { myCase: state.myCases.myCase };
}

export default connect(mapStateToProps, { fetchCase, deleteCase })(CasesShow);
