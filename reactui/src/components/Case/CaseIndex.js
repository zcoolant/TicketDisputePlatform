import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCases } from '../../actions/index';
import { Link } from 'react-router';

class CasesIndex extends Component {
  componentWillMount() {
    this.props.fetchCases();
  }

  renderCases() {
    return this.props.myCases.map((myCase) => {
      return (
        <li className="list-group-item" key={myCase.id}>
          <Link to={"/case/" + myCase.id}>
            <span className="pull-xs-right">{myCase.categories}</span>
            <strong>{myCase.title}</strong>
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Cases</h3>
        <ul className="list-group">
          {this.renderCases()}
        </ul>
      </div>
    );
  }
}

CasesIndex.propTypes = {
  fetchCases: React.PropTypes.func.isRequired,
  myCases: React.PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return { myCases: state.myCases.all };
}

export default connect(mapStateToProps, { fetchCases })(CasesIndex);
