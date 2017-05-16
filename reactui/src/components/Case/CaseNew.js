import React, { Component, PropTypes} from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { createCase } from '../../actions/index';

class CasesNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-error' : ''}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <span className="help-block">{touched ? error : ''}</span>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createCase(values)
      .then(() => {
        this.context.router.push('/case');
      });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title For Case"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Case Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/case/all" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  // console.log(values) -> { title: 'asdf', categories: 'asdf', content: 'asdf' }
  const errors = {};

  // Validate the inputs from 'values'
  if (!values.title) {
    errors.title = "Enter a title";
  }
  if (!values.categories) {
    errors.categories = 'Enter some categories';
  }
  if (!values.content) {
    errors.content = 'Enter some content please';
  }

  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, redux form assumes form is invalid
  return errors;
}


CasesNew.propTypes = {
  createCase: React.PropTypes.func.isRequired,
  fields: React.PropTypes.array.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
};

export default reduxForm({
  validate,
  form: 'CasesNewForm'
})(
  connect(null,{ createCase })(CasesNew)
);